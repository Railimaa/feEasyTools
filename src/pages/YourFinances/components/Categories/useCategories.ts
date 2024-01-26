import React, { useDeferredValue, useEffect, useMemo, useState } from 'react';

import { useTheme } from '../../../../contexts/useTheme';
import { useCategoriesTransaction } from '../../../../hooks/useCategoriesTransactions';
import { CategoryTransactionFilter } from '../../../../services/categoriesTransactionService/getAll';
import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

export function useCategories() {
  const { handleOpenNewCategoryModal, handleOpenEditCategoryModal } =
    useYourFinancesContext();

  const { theme } = useTheme();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const [filters, setFilters] = useState<CategoryTransactionFilter>({});
  const [searchInput, setSearchInput] = useState<string>('');

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  const {
    categoriesTransaction,
    isFetching,
    refetchCategories,
    isInitialLoading,
  } = useCategoriesTransaction(filters);

  useEffect(() => {
    refetchCategories();
  }, [filters, refetchCategories]);

  function handleApplyFilter(type: 'INCOME' | 'EXPENSE' | undefined) {
    setFilters((prevState) => ({
      ...prevState,
      type,
    }));
  }

  const deferedSearchValue = useDeferredValue(searchInput);
  const filteredCategories = useMemo(
    () =>
      categoriesTransaction.filter((category) =>
        category.name.toLowerCase().includes(deferedSearchValue.toLowerCase()),
      ),
    [categoriesTransaction, deferedSearchValue],
  );

  return {
    categories: categoriesTransaction,
    isLoading: isFetching,
    handleOpenNewCategoryModal,
    handleOpenEditCategoryModal,
    theme,
    filters,
    handleApplyFilter,
    isInitialLoading,
    searchInput,
    handleSearchInputChange,
    filteredCategories,
    sliderState,
    setSliderState,
  };
}
