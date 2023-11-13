import { useMemo, useState } from 'react';

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

  const currentBalance = useMemo(() => {
    if (!accounts) {
      return 0;
    }

    return accounts.reduce(
      (total, account) => total + account.currentBalance,
      0,
    );
  }, [accounts]);

  return {
    sliderState,
    setSliderState,
    windowWidth,
    isLoading: isFetching,
    accounts,
    arValuesVisible,
    handleVisibleArValues,
    handleOpenNewAccountModal,
    currentBalance,
  };
}
