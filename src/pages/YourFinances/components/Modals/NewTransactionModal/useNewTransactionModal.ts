import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useBankAccounts } from '../../../../../hooks/useBankAccounts';
import { useCategoriesTransaction } from '../../../../../hooks/useCategoriesTransactions';
import { transactionsService } from '../../../../../services/transactionsService';
import { currencyStringToNumber } from '../../../../../utils/currencyStringToNumber';
import { useYourFinancesContext } from '../../YourFinancesContext/useYourFinancesContext';

export function useNewTransactionModal() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    openNewTransactionModal,
    handleCloseNewTransactionModal,
    newTransactionType,
  } = useYourFinancesContext();

  const schema = z.object({
    value: z.string().min(1, 'Informe um valor'),
    name: z.string().min(1, 'Informe o nome'),
    bankAccountId: z.string().min(1, 'Informe a conta bancária'),
    categoryId: z.string().min(1, 'Informe a categoria'),
    date: z.date(),
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

  const useQuery = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await transactionsService.create({
        ...data,
        value: currencyStringToNumber(data.value),
        type: newTransactionType!,
        date: data.date.toISOString(),
      });
      useQuery.invalidateQueries(['transactions']);
      useQuery.invalidateQueries(['bankAccounts']);
      reset();
      handleCloseNewTransactionModal();
      toast.success(
        newTransactionType === 'EXPENSE'
          ? 'Despesa cadastrada com sucesso!'
          : 'Receita cadastrada com sucesso!',
      );
    } catch {
      toast.error(
        newTransactionType === 'EXPENSE'
          ? 'Ocorreu um erro ao cadastrar a despesa'
          : 'Ocorreu um erro ao cadastrar a receita',
      );
    } finally {
      setIsLoading(false);
    }
  });

  const { categoriesTransaction, isFetching: isLoadingBankAccounts } =
    useCategoriesTransaction();
  const { accounts, isFetching: isLoadingCategories } = useBankAccounts();

  const categories = useMemo(
    () =>
      categoriesTransaction.filter(
        (category) => category.type === newTransactionType,
      ),
    [categoriesTransaction, newTransactionType],
  );

  return {
    openNewTransactionModal,
    handleCloseNewTransactionModal,
    newTransactionType,
    categories,
    isLoadingCategories,
    accounts,
    isLoadingBankAccounts,
    handleSubmit,
    register,
    errors,
    control,
    isLoading,
  };
}
