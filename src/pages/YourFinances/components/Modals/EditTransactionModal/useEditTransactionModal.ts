import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useBankAccounts } from '../../../../../hooks/useBankAccounts';
import { useCategoriesTransaction } from '../../../../../hooks/useCategoriesTransactions';
import { transactionsService } from '../../../../../services/transactionsService';
import { ITransactions } from '../../../../../types/Transaction';
import { currencyStringToNumber } from '../../../../../utils/currencyStringToNumber';

export function useEditTransactionModal(
  transaction: ITransactions,
  handleCloseModal: () => void,
) {
  const { accounts } = useBankAccounts();
  const { categoriesTransaction } = useCategoriesTransaction({});

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  function handleOpenDeleteModal() {
    setOpenDeleteModal(true);
  }

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
  }

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome'),
    value: z.union([z.string().min(1, 'Informe o valor'), z.number()]),
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
    defaultValues: {
      name: transaction.name,
      value: transaction.value,
      bankAccountId: transaction.bankAccountId,
      categoryId: transaction.categoryId,
      date: transaction ? new Date(transaction.date) : new Date(),
    },
  });

  const useQuery = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await transactionsService.update({
        ...data,
        id: transaction.id,
        type: transaction.type,
        value: currencyStringToNumber(data.value),
        date: data.date.toISOString(),
      });
      useQuery.invalidateQueries(['transactions']);
      useQuery.invalidateQueries(['bankAccounts']);
      reset();
      toast.success(
        transaction.type === 'EXPENSE'
          ? 'Despesa editada com sucesso!'
          : 'Receita editada com sucesso!',
      );
      handleCloseModal();
    } catch {
      toast.error(
        transaction.type === 'EXPENSE'
          ? 'Erro ao salvar a despesa!'
          : 'Erro ao salvar a receita!',
      );
    } finally {
      setIsLoading(false);
    }
  });

  async function handleDeleteTransaction() {
    try {
      setIsLoading(true);

      await transactionsService.deleted(transaction.id);
      useQuery.invalidateQueries(['bankAccounts']);
      useQuery.invalidateQueries(['transactions']);
      toast.success(
        transaction.type === 'EXPENSE'
          ? 'Despesa deletada com sucesso!'
          : 'Receita deletada com sucesso!',
      );
      handleCloseModal();
    } catch {
      toast.error(
        transaction.type === 'EXPENSE'
          ? 'Erro ao deletar a despesa!'
          : 'Erro ao deletar a receita!',
      );
    } finally {
      setIsLoading(false);
    }
  }

  const categories = useMemo(
    () =>
      categoriesTransaction.filter(
        (category) => category.type === transaction.type,
      ),
    [categoriesTransaction, transaction],
  );
  return {
    accounts,
    categories,
    handleSubmit,
    register,
    errors,
    control,
    isLoading,
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteTransaction,
  };
}
