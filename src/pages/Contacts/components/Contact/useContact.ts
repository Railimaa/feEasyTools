import { useState } from 'react';

import { useContacts } from '../../../../hooks/useContacts';

export function useContact() {
  const [orderBy, setOrderBy] = useState('asc');

  function handleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  const { contacts, isFetching } = useContacts();

  return {
    orderBy,
    handleOrderBy,
    contacts,
    isLoading: isFetching,
  };
}
