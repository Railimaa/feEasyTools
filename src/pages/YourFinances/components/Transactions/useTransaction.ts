import { useEffect, useState } from 'react';

import { useTransactions } from '../../../../hooks/useTransactions';
import { TransactionFilter } from '../../../../services/transactionsService/getAll';
import { ITransactions } from '../../../../types/Transaction';
import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

export function useTransaction() {
  const { arValuesVisible } = useYourFinancesContext();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [openEditTransactionModal, setOpenEditTransactionModal] =
    useState<boolean>(false);
  const [transactionIsBeingEdited, setTransactionIsBeingEdited] =
    useState<null | ITransactions>(null);
  const [filters, setFilters] = useState<TransactionFilter>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const { transactions, isInitialLoading, isLoading, refetchTransactions } =
    useTransactions(filters);

  function handleChangeFilters<TFilter extends keyof TransactionFilter>(
    filter: TFilter,
  ) {
    return (value: TransactionFilter[TFilter]) => {
      if (value === filters[filter]) return;

      setFilters((prevState) => ({
        ...prevState,
        [filter]: value,
      }));
    };
  }

  useEffect(() => {
    refetchTransactions();
  }, [filters, refetchTransactions]);

  function handleOpenEditTransactionModal(transaction: ITransactions) {
    setOpenEditTransactionModal(true);
    setTransactionIsBeingEdited(transaction);
  }

  function handleCloseEditTransactionModal() {
    setOpenEditTransactionModal(false);
    setTransactionIsBeingEdited(null);
  }

  return {
    activeIndex,
    setActiveIndex,
    isInitialLoading,
    isLoading,
    transactions,
    arValuesVisible,
    openEditTransactionModal,
    handleOpenEditTransactionModal,
    handleCloseEditTransactionModal,
    transactionIsBeingEdited,
    filters,
    handleChangeFilters,
  };
}
