import { useState } from 'react';

export function useContact() {
  const [orderBy, setOrderBy] = useState('asc');

  function handleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  return {
    orderBy,
    handleOrderBy,
    contacts: [1],
    isLoading: false,
  };
}
