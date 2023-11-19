import { useState } from 'react';

import { useTransactions } from '../../../../hooks/useTransactions';
import { ITransactions } from '../../../../types/Transaction';
import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

export function useTransaction() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openEditTransactionModal, setOpenEditTransactionModal] =
    useState<boolean>(false);
  const [transactionIsBeingEdited, setTransactionIsBeingEdited] =
    useState<null | ITransactions>(null);

  function handleOpenEditTransactionModal(transaction: ITransactions) {
    setOpenEditTransactionModal(true);
    setTransactionIsBeingEdited(transaction);
  }

  function handleCloseEditTransactionModal() {
    setOpenEditTransactionModal(false);
    setTransactionIsBeingEdited(null);
  }

  const { arValuesVisible } = useYourFinancesContext();

  const { transactions, isInitialLoading, isLoading } = useTransactions();

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
  };
}
