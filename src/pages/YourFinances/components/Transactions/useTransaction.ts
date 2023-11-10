import { useState } from 'react';

export function useTransaction() {
  const [activeIndex, setActiveIndex] = useState(0);

  return {
    activeIndex,
    setActiveIndex,
    isInitialLoading: false,
    isloading: false,
    transactions: [1],
  };
}
