import { EmptyBox } from '../../../../../../assets/Icons/EmptyBox';
import { Button } from '../../../../../../components/Button';

import { Container } from './style';

export function EmptyList() {
  return (
    <Container>
      <div className="emptyContact">
        <div className="button">
          <Button>Novo contato</Button>
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
