/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import * as RdxRadioGroup from '@radix-ui/react-radio-group';

import { Container } from './style';

interface IRadioGroupProps {
  options: { value: string | boolean; label: string }[];
  value: string | boolean;
  onChange: (value: string | boolean) => void;
}

export function RadioGroup({ options, value, onChange }: IRadioGroupProps) {
  const parsedValue = typeof value === 'boolean' ? value.toString() : value;

  return (
    <Container>
      <RdxRadioGroup.Root
        defaultValue={parsedValue}
        onValueChange={(value) =>
          onChange(value === 'true' ? true : value === 'false' ? false : value)
        }
        className="RadioGroupRoot"
        aria-label="View density"
      >
        {options.map((option) => (
          <div className="radioItem" key={option.label}>
            <RdxRadioGroup.Item
              className="RadioGroupItem"
              value={
                typeof option.value === 'boolean'
                  ? value.toString()
                  : option.value
              }
              id={option.label}
            >
              <RdxRadioGroup.Indicator className="RadioGroupIndicator" />
            </RdxRadioGroup.Item>
            <label className="Label" htmlFor={option.label}>
              {option.label}
            </label>
          </div>
        ))}
      </RdxRadioGroup.Root>
    </Container>
  );
}
