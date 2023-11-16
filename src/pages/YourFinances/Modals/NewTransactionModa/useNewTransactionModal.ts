import { useYourFinancesContext } from '../../components/YourFinancesContext/useYourFinancesContext';

export function useNewTransactionModal() {
  const {
    openNewTransactionModal,
    handleCloseNewTransactionModal,
    newTransactionType,
  } = useYourFinancesContext();

  return {
    openNewTransactionModal,
    handleCloseNewTransactionModal,
    newTransactionType,
  };
}
