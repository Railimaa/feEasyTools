import emptySearch from '../../../../../assets/images/emptySearch.svg';
import { useTheme } from '../../../../../contexts/useTheme';

import { Container } from './style';

export function EmptySearch({ searchValue }: { searchValue: string }) {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <img src={emptySearch} alt="" />
      <p>
        Nenhum resultado encontrado para <strong>{searchValue}</strong>
      </p>
    </Container>
  );
}
