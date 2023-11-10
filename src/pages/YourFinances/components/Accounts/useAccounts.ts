import { useState } from 'react';

import { useBankAccounts } from '../../../../hooks/useBankAccounts';
import { UseWindowWidth } from '../../../../hooks/UseWindowWidht';

export function useAccounts() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const windowWidth = UseWindowWidth();

  const { accounts, isFetching } = useBankAccounts();

  return {
    sliderState,
    setSliderState,
    windowWidth,
    isLoading: isFetching,
    accounts,
  };
}
