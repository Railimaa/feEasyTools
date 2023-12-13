import React, { useDeferredValue, useEffect, useMemo, useState } from 'react';

import { useContacts } from '../../../../hooks/useContacts';
import { ContactFilter } from '../../../../services/contactsService/getAll';
import { useContactContext } from '../ContactContext/useContactContext';

export function useContact() {
  const { handleOpenEditedContactModal } = useContactContext();

  const [filters, setFilters] = useState<ContactFilter>({
    orderBy: 'asc',
  });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);

  const { contacts, isLoading, refetchContacts, isInitialLoading } =
    useContacts(filters);

  function handleOpenFilterModal() {
    setOpenFilterModal(true);
  }

  function handleCloseFilterModal() {
    setOpenFilterModal(false);
  }

  useEffect(() => {
    refetchContacts();
  }, [filters, refetchContacts]);

  function handleOrderBy() {
    setFilters((prevState) => ({
      ...prevState,
      orderBy: prevState.orderBy === 'asc' ? 'desc' : 'asc',
    }));
  }

  function handleCategoryFilter(categoryId: string) {
    setFilters((prevState) => ({
      ...prevState,
      categoryId,
    }));
    handleCloseFilterModal();
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
    filters,
    handleOrderBy,
    contacts,
    isLoading,
    handleOpenEditedContactModal,
    searchTerm,
    handleChangeSearchTerm,
    filteredContacts,
    isInitialLoading,
    openFilterModal,
    handleOpenFilterModal,
    handleCloseFilterModal,
    handleCategoryFilter,
  };
}
