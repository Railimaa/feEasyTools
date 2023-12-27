import EmptySearch from '../../../../../assets/images/emptySearch.svg';

import { Container } from './style';

interface ISearchNotFoundProps {
  searchValue: string;
}

export function SearchNotFound({ searchValue }: ISearchNotFoundProps) {
  return (
    <Container>
      <img src={EmptySearch} alt="" />
      <span>
        Nenhum resultado foi encontrado para <strong>{searchValue}</strong>
      </span>
    </Container>
  );
}
