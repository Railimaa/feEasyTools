import { useMemo } from 'react';

import { useCategoriesTransaction } from '../../../../hooks/useCategoriesTransactions';
import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

export function useCategoriesIncome() {
  const { categoriesTransaction, isFetching } = useCategoriesTransaction();
  const { handleOpenNewCategoryModal, handleOpenEditCategoryModal } =
    useYourFinancesContext();

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
  };
}
