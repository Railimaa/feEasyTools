import React, { createContext, useCallback, useMemo, useState } from 'react';

interface IContactContextValue {
  openNewContactModal: boolean;
  handleOpenNewContactModal: () => void;
  handleCloseNewContactModal: () => void;
}

export const ContactContext = createContext({} as IContactContextValue);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [openNewContactModal, setOpenNewContactModal] =
    useState<boolean>(false);

  const handleOpenNewContactModal = useCallback(() => {
    setOpenNewContactModal(true);
  }, []);

  const handleCloseNewContactModal = useCallback(() => {
    setOpenNewContactModal(false);
  }, []);

  const contextValues = useMemo(
    () => ({
      openNewContactModal,
      handleOpenNewContactModal,
      handleCloseNewContactModal,
    }),
    [
      openNewContactModal,
      handleOpenNewContactModal,
      handleCloseNewContactModal,
    ],
  );

  return (
    <ContactContext.Provider value={contextValues}>
      {children}
    </ContactContext.Provider>
  );
}
