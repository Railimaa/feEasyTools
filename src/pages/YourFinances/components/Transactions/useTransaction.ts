import { useState } from 'react';

import { useTransactions } from '../../../../hooks/useTransactions';
import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

export function useTransaction() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { arValuesVisible } = useYourFinancesContext();

  const { transactions, isInitialLoading, isLoading } = useTransactions();

  return {
    activeIndex,
    setActiveIndex,
    isInitialLoading,
    isLoading,
    transactions,
    arValuesVisible,
  };
}
