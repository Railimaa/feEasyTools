import { EmptyBox } from '../../../../../assets/Icons/EmptyBox';
import { Button } from '../../../../../components/Button';
import { useContactContext } from '../../ContactContext/useContactContext';

import { Container } from './style';

export function EmptyList() {
  const { handleOpenNewContactModal } = useContactContext();

  return (
    <Container>
      <div className="emptyContact">
        <div className="button">
          <Button onClick={handleOpenNewContactModal}>Novo contato</Button>
        </div>
        <EmptyBox />
        <p>
          Você ainda não tem nenhum contato cadastrado! Clique no botão{' '}
          <span>”Novo contato”</span> à cima para cadastrar o seu primeiro!
        </p>
      </div>
    </Container>
  );
}
