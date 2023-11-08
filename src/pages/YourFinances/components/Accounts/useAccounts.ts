import { useState } from 'react';

import { UseWindowWidth } from '../../../../hooks/UseWindowWidht';

export function useAccounts() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const windowWidth = UseWindowWidth();

  return {
    sliderState,
    setSliderState,
    windowWidth,
    isLoading: false,
    accounts: [1],
  };
}
