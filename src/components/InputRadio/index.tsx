import React, { ComponentProps, forwardRef } from 'react';

import { Input, Label } from './style';

interface IInputRadioProps extends ComponentProps<'input'> {
  labelName: string;
  labelId: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  checked: boolean;
}

export const InputRadio = forwardRef<HTMLInputElement, IInputRadioProps>(
  ({ labelName, labelId, onChange, checked, ...props }, ref) => (
    <Label htmlFor={labelName}>
      <Input
        {...props}
        type="radio"
        id={labelId}
        ref={ref}
        checked={checked}
        onChange={(event) => {
          if (onChange) {
            onChange(event as React.ChangeEvent<HTMLInputElement>);
          }
        }}
      />
      {labelName}
    </Label>
  ),
);
