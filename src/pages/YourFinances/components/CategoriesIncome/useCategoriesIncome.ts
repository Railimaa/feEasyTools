import { useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';

import { useTheme } from '../../../../contexts/useTheme';
import { useCategoriesTransaction } from '../../../../hooks/useCategoriesTransactions';
import { categoriesTransactionService } from '../../../../services/categoriesTransactionService';
import { ICategoryTransaction } from '../../../../types/CategoryTransaction';
import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

export function useCategoriesIncome() {
  const { handleOpenNewCategoryModal, handleOpenEditCategoryModal } =
    useYourFinancesContext();

  const { theme } = useTheme();

  const { categoriesTransaction, isFetching } = useCategoriesTransaction();

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const [categoryId, setCategoryId] = useState<null | ICategoryTransaction>(
    null,
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleOpenDeleteModal(category: ICategoryTransaction) {
    setOpenDeleteModal(true);
    setCategoryId(category);
  }

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
    setCategoryId(null);
  }

  const useQuery = useQueryClient();
  async function handleDeleteCategory() {
    try {
      setIsLoading(true);

      await categoriesTransactionService.deleted(categoryId!.id);
      useQuery.invalidateQueries(['categoriesTransaction']);
      useQuery.invalidateQueries(['transactions']);
      handleCloseDeleteModal();
      toast.success(
        categoryId?.type === 'INCOME'
          ? 'Categoria de receita deletada com sucesso!'
          : 'Categoria de despesa deletada com sucesso!',
      );
    } catch {
      toast.error('Erro ao deletar a categoria!');
    } finally {
      setIsLoading(false);
    }
  }

  const categoriesIncome = useMemo(
    () =>
      categoriesTransaction.filter((categorie) => categorie.type === 'INCOME'),
    [categoriesTransaction],
  );

  return {
    categories: categoriesIncome,
    isLoading: isFetching,
    handleOpenNewCategoryModal,
    handleOpenEditCategoryModal,
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    isLoadingDelete: isLoading,
    handleDeleteCategory,
    theme,
  };
}
