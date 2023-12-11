import React, { createContext, useCallback, useMemo, useState } from 'react';

import { ICategoryContact } from '../../../../types/CategoryContact';
import { IContact } from '../../../../types/Contact';

interface IContactContextValue {
  openNewContactModal: boolean;
  handleOpenNewContactModal: () => void;
  handleCloseNewContactModal: () => void;
  openEditContactModal: boolean;
  contactIsBeingEdited: null | IContact;
  handleOpenEditedContactModal: (contact: IContact) => void;
  handleCloseEditedContactModal: () => void;
  openNewCategoryContact: boolean;
  handleOpenNewCategoryContactModal: () => void;
  handleCloseNewCategoryContactModal: () => void;
  openEditCategoryContact: boolean;
  categoryBeingEdited: null | ICategoryContact;
  handleOpenEditedCategoryModal: (category: ICategoryContact) => void;
  handleCloseEditedCategoryModal: () => void;
}

export const ContactContext = createContext({} as IContactContextValue);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [openNewContactModal, setOpenNewContactModal] =
    useState<boolean>(false);
  const [openEditContactModal, setOpenEditContactModal] =
    useState<boolean>(false);
  const [contactIsBeingEdited, setContactIsBeingEdited] =
    useState<null | IContact>(null);
  const [openNewCategoryContact, setOpenNewCategoryContact] =
    useState<boolean>(false);
  const [openEditCategoryContact, setOpenEditCategoryContact] =
    useState<boolean>(false);
  const [categoryBeingEdited, setCategoryBeingEdited] =
    useState<null | ICategoryContact>(null);

  const handleOpenNewContactModal = useCallback(() => {
    setOpenNewContactModal(true);
  }, []);

  const handleCloseNewContactModal = useCallback(() => {
    setOpenNewContactModal(false);
  }, []);

  const handleOpenEditedContactModal = useCallback((contact: IContact) => {
    setOpenEditContactModal(true);
    setContactIsBeingEdited(contact);
  }, []);

  const handleCloseEditedContactModal = useCallback(() => {
    setOpenEditContactModal(false);
    setContactIsBeingEdited(null);
  }, []);

  const handleOpenNewCategoryContactModal = useCallback(() => {
    setOpenNewCategoryContact(true);
  }, []);

  const handleCloseNewCategoryContactModal = useCallback(() => {
    setOpenNewCategoryContact(false);
  }, []);

  const handleOpenEditedCategoryModal = useCallback(
    (category: ICategoryContact) => {
      setOpenEditCategoryContact(true);
      setCategoryBeingEdited(category);
    },
    [],
  );

  const handleCloseEditedCategoryModal = useCallback(() => {
    setOpenEditCategoryContact(false);
    setCategoryBeingEdited(null);
  }, []);

  const contextValues = useMemo(
    () => ({
      openNewContactModal,
      handleOpenNewContactModal,
      handleCloseNewContactModal,
      openEditContactModal,
      contactIsBeingEdited,
      handleOpenEditedContactModal,
      handleCloseEditedContactModal,
      openNewCategoryContact,
      handleOpenNewCategoryContactModal,
      handleCloseNewCategoryContactModal,
      openEditCategoryContact,
      categoryBeingEdited,
      handleOpenEditedCategoryModal,
      handleCloseEditedCategoryModal,
    }),
    [
      openNewContactModal,
      handleOpenNewContactModal,
      handleCloseNewContactModal,
      openEditContactModal,
      contactIsBeingEdited,
      handleOpenEditedContactModal,
      handleCloseEditedContactModal,
      openNewCategoryContact,
      handleOpenNewCategoryContactModal,
      handleCloseNewCategoryContactModal,
      openEditCategoryContact,
      categoryBeingEdited,
      handleOpenEditedCategoryModal,
      handleCloseEditedCategoryModal,
    ],
  );

  return (
    <ContactContext.Provider value={contextValues}>
      {children}
    </ContactContext.Provider>
  );
}
