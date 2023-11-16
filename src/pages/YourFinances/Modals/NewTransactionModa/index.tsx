import { Modal } from '../../../../components/Modal';

import { Container } from './style';
import { useNewTransactionModal } from './useNewTransactionModal';

export function NewTransactionModal() {
  const {
    openNewTransactionModal,
    handleCloseNewTransactionModal,
    newTransactionType,
  } = useNewTransactionModal();

  const isExpense = newTransactionType === 'EXPENSE' ? 'Despesa' : 'Receita';

  return (
    <Modal
      title={`Nova ${isExpense}`}
      open={openNewTransactionModal}
      onClose={handleCloseNewTransactionModal}
    >
      <Container>
        <p>Transaction Modal</p>
      </Container>
    </Modal>
  );
}
