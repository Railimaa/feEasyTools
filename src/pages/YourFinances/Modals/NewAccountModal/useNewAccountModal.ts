import { useYourFinancesContext } from '../../components/YourFinancesContext/useYourFinancesContext';

export function useNewAccountModal() {
  const {
    openNewAccountModal,
    handleOpenNewAccountModal,
    handleCloseNewAccountModal,
  } = useYourFinancesContext();

  return {
    openNewAccountModal,
    handleOpenNewAccountModal,
    handleCloseNewAccountModal,
  };
}
