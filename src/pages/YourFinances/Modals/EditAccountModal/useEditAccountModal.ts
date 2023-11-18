import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { bankAccountService } from '../../../../services/bankAccountService';
import { currencyStringToNumber } from '../../../../utils/currencyStringToNumber';
import { useYourFinancesContext } from '../../components/YourFinancesContext/useYourFinancesContext';

export function useEditAccountModal() {
  const {
    openEditAccountModal,
    handleCloseEditAccountModal,
    accountIsBeingEdited,
  } = useYourFinancesContext();

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
    color: z.string().min(1, 'Cor é obrigatório.'),
    type: z.enum(['CHECKING', 'INVESTMENT', 'CASH']),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      initialBalance: accountIsBeingEdited?.initialBalance,
      name: accountIsBeingEdited?.name,
      color: accountIsBeingEdited?.color,
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
      toast.success('Conta editada com sucesso!');
      handleCloseEditAccountModal();
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
  };
}
