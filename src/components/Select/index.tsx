/* eslint-disable jsx-a11y/control-has-associated-label */
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
  label: string;
}

export function Select({
  options,
  error,
  onChange,
  value,
  label,
}: ISelectProps) {
  return (
    <Container>
      <SelectC
        value={value || ''}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder="Tipo"
        color={error}
      >
        <option value="" />
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectC>

      <div className="label">{label}</div>

      {error && <FieldError error={error} />}
    </Container>
  );
}
