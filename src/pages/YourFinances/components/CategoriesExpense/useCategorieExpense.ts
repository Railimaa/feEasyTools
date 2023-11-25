import { useMemo } from 'react';

import { useCategoriesTransaction } from '../../../../hooks/useCategoriesTransactions';
import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

export function useCategorieExpense() {
  const { categoriesTransaction, isFetching } = useCategoriesTransaction();
  const { handleOpenNewCategoryModal } = useYourFinancesContext();

  const categoriesExpense = useMemo(
    () =>
      categoriesTransaction.filter((category) => category.type === 'EXPENSE'),
    [categoriesTransaction],
  );

  return {
    categories: categoriesExpense,
    isLoading: isFetching,
    handleOpenNewCategoryModal,
  };
}
