import { useState } from 'react';

import { useContacts } from '../../../../hooks/useContacts';
import { useContactContext } from '../ContactContext/useContactContext';

export function useContact() {
  const { handleOpenEditedContactModal } = useContactContext();

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
    handleOpenEditedContactModal,
  };
}
