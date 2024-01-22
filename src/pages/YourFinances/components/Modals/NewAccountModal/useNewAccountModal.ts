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

export function useNewAccountModal() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    openNewAccountModal,
    handleOpenNewAccountModal,
    handleCloseNewAccountModal,
  } = useYourFinancesContext();

  const { theme } = useTheme();

  const schema = z.object({
    initialBalance: z.string().min(1, 'Saldo inicial é obrigatório.'),
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
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await bankAccountService.create({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
      });
      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      toast.success('Conta cadastrada com sucesso!');
      handleCloseNewAccountModal();
      reset();
    } catch {
      toast.error('Erro ao cadastrar a conta!');
    } finally {
      setIsLoading(false);
    }
  });

  return {
    openNewAccountModal,
    handleOpenNewAccountModal,
    handleCloseNewAccountModal,
    handleSubmit,
    register,
    errors,
    isLoading,
    control,
    theme,
  };
}
