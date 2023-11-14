/* eslint-disable react/require-default-props */

import { FieldError } from '../FieldError';

import { Container, SelectC } from './style';

interface ISelectProps {
  options: {
    value: string;
    label: string;
  }[];
  error?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export function Select({ options, error, onChange, value }: ISelectProps) {
  return (
    <Container>
      <SelectC
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder="Tipo"
        color={error}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectC>

      {error && <FieldError error={error} />}
    </Container>
  );
}
