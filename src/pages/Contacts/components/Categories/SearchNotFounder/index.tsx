import emptySearch from '../../../../../assets/images/emptySearch.svg';

import { Container } from './style';

export function SearchNotFound({ searchValue }: { searchValue: string }) {
  return (
    <Container>
      <img src={emptySearch} alt="" />

      <strong>Nenhum resultado foi encontrado para {searchValue}</strong>
    </Container>
  );
}
