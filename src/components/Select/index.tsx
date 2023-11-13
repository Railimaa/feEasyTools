import { ComponentProps, forwardRef } from 'react';

import { SelectC } from './style';

interface ISelectProps extends ComponentProps<'select'> {
  options: {
    value: string;
    label: string;
  }[];
}

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ options }, ref) => (
    <SelectC ref={ref}>
      <option value="" hidden>
        Tipo
      </option>
      {options.map((option) => (
        <option key={option.value}>{option.label}</option>
      ))}
    </SelectC>
  ),
);
