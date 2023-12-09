import emptySearch from '../../../../../../assets/images/emptySearch.svg';

import { Container } from './style';

interface ISearchNotFoundProps {
  searchValue: string;
}

export function SearchNotFound({ searchValue }: ISearchNotFoundProps) {
  return (
    <Container>
      <div className="content">
        <img src={emptySearch} alt="" />
        <span>
          Nenhum resultado foi encontrado para <strong>{searchValue}</strong>.
        </span>
      </div>
    </Container>
  );
}
