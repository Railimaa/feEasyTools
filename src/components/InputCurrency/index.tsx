import { NumericFormat } from 'react-number-format';

import { Container } from './style';

export function InputCurrency() {
  return (
    <Container>
      <NumericFormat thousandSeparator="." decimalSeparator="," />
    </Container>
  );
}
