import React, { useDeferredValue, useMemo, useState } from 'react';

import { useContacts } from '../../../../hooks/useContacts';
import { useContactContext } from '../ContactContext/useContactContext';

export function useContact() {
  const { handleOpenEditedContactModal } = useContactContext();

  const { contacts, isFetching } = useContacts();

  const [orderBy, setOrderBy] = useState<string>('asc');
  const [searchTerm, setSearchTerm] = useState<string>('');

  function handleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  const searchDeferedValue = useDeferredValue(searchTerm);
  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchDeferedValue.toLowerCase()),
      ),
    [contacts, searchDeferedValue],
  );

  return {
    orderBy,
    handleOrderBy,
    contacts,
    isLoading: isFetching,
    handleOpenEditedContactModal,
    searchTerm,
    handleChangeSearchTerm,
    filteredContacts,
  };
}
