import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';

import { useNewContactModal } from './useNewContactModal';

export function NewContactModal() {
  const { openNewContactModal, handleCloseNewContactModal } =
    useNewContactModal();

  return (
    <Modal
      open={openNewContactModal}
      onClose={handleCloseNewContactModal}
      title="Novo contato"
    >
      <Input label="Nome" />
      <Input />
      <Input />
    </Modal>
  );
}
