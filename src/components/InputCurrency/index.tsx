/* eslint-disable react/require-default-props */
import { NumericFormat } from 'react-number-format';

import { useTheme } from '../../contexts/useTheme';
import { FieldError } from '../FieldError';

import { Container } from './style';

interface IInputCurrencyProps {
  error?: string;
  onchange?: (value: string) => void;
  value?: string | number;
}

export function InputCurrency({ error, onchange, value }: IInputCurrencyProps) {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <NumericFormat
        thousandSeparator="."
        decimalSeparator=","
        value={value}
        onValueChange={(event) => onchange?.(event.value)}
      />

      {error && <FieldError error={error} />}
    </Container>
  );
}
