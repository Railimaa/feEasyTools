import React, { createContext, useCallback, useMemo, useState } from 'react';

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
  const [openNewAccountModal, setOpenNewAccountModal] =
    useState<boolean>(false);
  const [arValuesVisible, setArValuesVisible] = useState<boolean>(false);
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
    ],
  );

  return (
    <YourFinancesContext.Provider value={contextValues}>
      {children}
    </YourFinancesContext.Provider>
  );
}
