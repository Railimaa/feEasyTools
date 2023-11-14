import React, { createContext, useCallback, useMemo, useState } from 'react';

import { IBankAccount } from '../../../../types/BankAccount';

interface IYourFinancesContextValue {
  openNewAccountModal: boolean;
  handleOpenNewAccountModal: () => void;
  handleCloseNewAccountModal: () => void;
  arValuesVisible: boolean;
  handleVisibleArValues: () => void;
  accountIsBeingEdited: null | IBankAccount;
  openEditAccountModal: boolean;
  handleOpenEditAccountModal: (account: IBankAccount) => void;
  handleCloseEditAccountModal: () => void;
}

export const YourFinancesContext = createContext(
  {} as IYourFinancesContextValue,
);

export function YourFinancesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openNewAccountModal, setOpenNewAccountModal] =
    useState<boolean>(false);
  const [arValuesVisible, setArValuesVisible] = useState<boolean>(false);
  const [openEditAccountModal, setOpenEditAccountModal] =
    useState<boolean>(false);
  const [accountIsBeingEdited, setAccountIsBeingEdited] =
    useState<null | IBankAccount>(null);

  const handleOpenNewAccountModal = useCallback(() => {
    setOpenNewAccountModal(true);
  }, []);

  const handleCloseNewAccountModal = useCallback(() => {
    setOpenNewAccountModal(false);
  }, []);

  const handleVisibleArValues = useCallback(() => {
    setArValuesVisible((prevState) => !prevState);
  }, []);

  const handleOpenEditAccountModal = useCallback((account: IBankAccount) => {
    setOpenEditAccountModal(true);
    setAccountIsBeingEdited(account);
  }, []);

  const handleCloseEditAccountModal = useCallback(() => {
    setOpenEditAccountModal(false);
    setAccountIsBeingEdited(null);
  }, []);

  const contextValues = useMemo(
    () => ({
      openNewAccountModal,
      handleOpenNewAccountModal,
      handleCloseNewAccountModal,
      arValuesVisible,
      handleVisibleArValues,
      accountIsBeingEdited,
      openEditAccountModal,
      handleOpenEditAccountModal,
      handleCloseEditAccountModal,
    }),
    [
      openNewAccountModal,
      handleOpenNewAccountModal,
      handleCloseNewAccountModal,
      arValuesVisible,
      handleVisibleArValues,
      accountIsBeingEdited,
      openEditAccountModal,
      handleOpenEditAccountModal,
      handleCloseEditAccountModal,
    ],
  );

  return (
    <YourFinancesContext.Provider value={contextValues}>
      {children}
    </YourFinancesContext.Provider>
  );
}
