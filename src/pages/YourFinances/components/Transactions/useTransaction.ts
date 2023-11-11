import { useState } from 'react';

import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

export function useTransaction() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { arValuesVisible } = useYourFinancesContext();

  return {
    activeIndex,
    setActiveIndex,
    isInitialLoading: false,
    isloading: false,
    transactions: [1],
    arValuesVisible,
  };
}
