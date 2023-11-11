import React, { createContext, useCallback, useMemo, useState } from 'react';

interface IYourFinancesContextValue {
  openNewAccountModal: boolean;
  handleOpenNewAccountModal: () => void;
  handleCloseNewAccountModal: () => void;
  arValuesVisible: boolean;
  handleVisibleArValues: () => void;
}

export const YourFinancesContext = createContext(
  {} as IYourFinancesContextValue,
);

export function YourFinancesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openNewAccountModal, setOpenNewAccountModal] = useState(false);
  const [arValuesVisible, setArValuesVisible] = useState(false);

  const handleOpenNewAccountModal = useCallback(() => {
    setOpenNewAccountModal(true);
  }, []);

  const handleCloseNewAccountModal = useCallback(() => {
    setOpenNewAccountModal(false);
  }, []);

  const handleVisibleArValues = useCallback(() => {
    setArValuesVisible((prevState) => !prevState);
  }, []);

  const contextValues = useMemo(
    () => ({
      openNewAccountModal,
      handleOpenNewAccountModal,
      handleCloseNewAccountModal,
      arValuesVisible,
      handleVisibleArValues,
    }),
    [
      openNewAccountModal,
      handleOpenNewAccountModal,
      handleCloseNewAccountModal,
      arValuesVisible,
      handleVisibleArValues,
    ],
  );

  return (
    <YourFinancesContext.Provider value={contextValues}>
      {children}
    </YourFinancesContext.Provider>
  );
}
