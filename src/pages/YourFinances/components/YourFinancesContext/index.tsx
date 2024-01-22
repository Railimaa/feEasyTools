/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useCallback, useState } from 'react';

import { IBankAccount } from '../../../../types/BankAccount';
import { ICategoryTransaction } from '../../../../types/CategoryTransaction';

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
  openNewTransactionModal: boolean;
  newTransactionType: null | 'INCOME' | 'EXPENSE';
  handleOpenNewTransactionModal: (type: 'INCOME' | 'EXPENSE') => void;
  handleCloseNewTransactionModal: () => void;
  openNewCategoryModal: boolean;
  handleOpenNewCategoryModal: () => void;
  handleCloseNewCategoryModal: () => void;
  openEditCategoryModal: boolean;
  categoryIsBeingEdited: null | ICategoryTransaction;
  handleOpenEditCategoryModal: (category: ICategoryTransaction) => void;
  handleCloseEditCategoryModal: () => void;
}

export const YourFinancesContext = createContext(
  {} as IYourFinancesContextValue,
);

export function YourFinancesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storageArValuesVisible = localStorage.getItem('valueVisible');
  const [arValuesVisible, setArValuesVisible] = useState<boolean>(
    storageArValuesVisible ? JSON.parse(storageArValuesVisible) : false,
  );

  const [openNewAccountModal, setOpenNewAccountModal] =
    useState<boolean>(false);

  const [openEditAccountModal, setOpenEditAccountModal] =
    useState<boolean>(false);

  const [accountIsBeingEdited, setAccountIsBeingEdited] =
    useState<null | IBankAccount>(null);

  const [openNewTransactionModal, setOpenNewTransactionModal] =
    useState<boolean>(false);

  const [newTransactionType, setNewTransactionType] = useState<
    null | 'INCOME' | 'EXPENSE'
  >(null);

  const [openNewCategoryModal, setOpenNewCategoryModal] =
    useState<boolean>(false);

  const [openEditCategoryModal, setOpenEditCategoryModal] =
    useState<boolean>(false);

  const [categoryIsBeingEdited, setCategoryIsBeingEdited] =
    useState<null | ICategoryTransaction>(null);

  const handleOpenNewAccountModal = useCallback(() => {
    setOpenNewAccountModal(true);
  }, []);

  const handleCloseNewAccountModal = useCallback(() => {
    setOpenNewAccountModal(false);
  }, []);

  const handleVisibleArValues = useCallback(() => {
    setArValuesVisible((prevState) => {
      const newValue = !prevState;

      localStorage.setItem('valueVisible', JSON.stringify(newValue));

      return newValue;
    });
  }, []);

  const handleOpenEditAccountModal = useCallback((account: IBankAccount) => {
    setOpenEditAccountModal(true);
    setAccountIsBeingEdited(account);
  }, []);

  const handleCloseEditAccountModal = useCallback(() => {
    setOpenEditAccountModal(false);
    setAccountIsBeingEdited(null);
  }, []);

  const handleOpenNewTransactionModal = useCallback(
    (type: 'INCOME' | 'EXPENSE') => {
      setOpenNewTransactionModal(true);
      setNewTransactionType(type);
    },
    [],
  );

  const handleCloseNewTransactionModal = useCallback(() => {
    setOpenNewTransactionModal(false);
    setNewTransactionType(null);
  }, []);

  const handleOpenNewCategoryModal = useCallback(() => {
    setOpenNewCategoryModal(true);
  }, []);

  const handleCloseNewCategoryModal = useCallback(() => {
    setOpenNewCategoryModal(false);
  }, []);

  const handleOpenEditCategoryModal = useCallback(
    (category: ICategoryTransaction) => {
      setOpenEditCategoryModal(true);
      setCategoryIsBeingEdited(category);
    },
    [],
  );

  const handleCloseEditCategoryModal = useCallback(() => {
    setOpenEditCategoryModal(false);
    setCategoryIsBeingEdited(null);
  }, []);

  return (
    <YourFinancesContext.Provider
      value={{
        openNewAccountModal,
        handleOpenNewAccountModal,
        handleCloseNewAccountModal,
        arValuesVisible,
        handleVisibleArValues,
        accountIsBeingEdited,
        openEditAccountModal,
        handleOpenEditAccountModal,
        handleCloseEditAccountModal,
        openNewTransactionModal,
        newTransactionType,
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal,
        openNewCategoryModal,
        handleOpenNewCategoryModal,
        handleCloseNewCategoryModal,
        openEditCategoryModal,
        categoryIsBeingEdited,
        handleOpenEditCategoryModal,
        handleCloseEditCategoryModal,
      }}
    >
      {children}
    </YourFinancesContext.Provider>
  );
}
