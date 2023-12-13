import { EmptyBox } from '../../../../../assets/Icons/EmptyBox';

import { Container } from './style';

export function EmptyList() {
  return (
    <Container>
      <EmptyBox />
      <p>Não encontramos nenhum contato!</p>
    </Container>
  );
}
