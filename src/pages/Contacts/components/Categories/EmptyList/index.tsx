import { Button } from '../../../../../components/Button';
import { useContactContext } from '../../ContactContext/useContactContext';

import { Container } from './style';

export function EmptyList() {
  const { handleOpenNewCategoryContactModal } = useContactContext();

  return (
    <Container>
      <div className="button">
        <Button onClick={handleOpenNewCategoryContactModal}>
          Nova categoria
        </Button>
      </div>
      <p>
        Você ainda não tem nenhuma categoria cadastrada! Clique no botão{' '}
        <span>”Nova categoria”</span> à cima para cadastrar sua primeira!
      </p>
    </Container>
  );
}
