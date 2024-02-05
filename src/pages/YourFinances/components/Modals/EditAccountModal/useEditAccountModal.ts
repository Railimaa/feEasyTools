import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useTheme } from '../../../../../contexts/useTheme';
import { bankAccountService } from '../../../../../services/bankAccountService';
import { currencyStringToNumber } from '../../../../../utils/currencyStringToNumber';
import { useYourFinancesContext } from '../../YourFinancesContext/useYourFinancesContext';

export function useEditAccountModal() {
  const {
    openEditAccountModal,
    handleCloseEditAccountModal,
    accountIsBeingEdited,
  } = useYourFinancesContext();

  const { theme } = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  function handleOpenDeleteModal() {
    setOpenDeleteModal(true);
  }

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
  }

  const schema = z.object({
    initialBalance: z.union([
      z.string().min(1, 'Saldo inicial é obrigatório.'),
      z.number(),
    ]),
    name: z.string().min(1, 'Nome da conta é obrigatório.'),
    categoryId: z.string().min(1, 'Categoria é obrigatório.'),
    type: z.enum(['CHECKING', 'INVESTMENT', 'CASH']),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      initialBalance: accountIsBeingEdited?.initialBalance,
      name: accountIsBeingEdited?.name,
      categoryId: accountIsBeingEdited?.categoryBankAccount.id,
      type: accountIsBeingEdited?.type,
    },
  });

  const queryClient = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await bankAccountService.update({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
        id: accountIsBeingEdited!.id,
      });
      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      reset();
      handleCloseEditAccountModal();
      toast.success('Conta editada com sucesso!');
    } catch {
      toast.error('Erro ao editar a conta.');
    } finally {
      setIsLoading(false);
    }
  });

  async function handleDeleteAccount() {
    try {
      setIsLoading(true);

      await bankAccountService.deleted(accountIsBeingEdited!.id);
      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      toast.success('Conta deletada com sucesso!');
      handleCloseEditAccountModal();
    } catch {
      toast.error('Erro ao deletar a conta!');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    openEditAccountModal,
    handleCloseEditAccountModal,
    isLoading,
    register,
    errors,
    control,
    handleSubmit,
    accountIsBeingEdited,
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteAccount,
    theme,
  };
}
