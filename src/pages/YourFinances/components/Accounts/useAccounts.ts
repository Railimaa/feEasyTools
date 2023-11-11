import { useState } from 'react';

import { useBankAccounts } from '../../../../hooks/useBankAccounts';
import { UseWindowWidth } from '../../../../hooks/UseWindowWidht';
import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

export function useAccounts() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const { arValuesVisible, handleVisibleArValues, handleOpenNewAccountModal } =
    useYourFinancesContext();

  const windowWidth = UseWindowWidth();

  const { accounts, isFetching } = useBankAccounts();

  return {
    sliderState,
    setSliderState,
    windowWidth,
    isLoading: isFetching,
    accounts,
    arValuesVisible,
    handleVisibleArValues,
    handleOpenNewAccountModal,
  };
}
