import { useContactContext } from '../../ContactContext/useContactContext';

export function useNewContactModal() {
  const { openNewContactModal, handleCloseNewContactModal } =
    useContactContext();

  return {
    openNewContactModal,
    handleCloseNewContactModal,
  };
}
