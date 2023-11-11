import { Modal } from '../../../../components/Modal';

import { Container } from './style';
import { useNewAccountModal } from './useNewAccountModal';

export function NewAccountModal() {
  const { openNewAccountModal, handleCloseNewAccountModal } =
    useNewAccountModal();

  return (
    <Container>
      <Modal
        title="Conta"
        open={openNewAccountModal}
        onClose={handleCloseNewAccountModal}
      >
        Modal BankAccount
      </Modal>
    </Container>
  );
}
