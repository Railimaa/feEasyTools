/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { ComponentProps, forwardRef, useState } from 'react';

import { EyIcon } from '../../assets/Icons/EyeIcon';
import { FieldError } from '../FieldError';

import { Container, InputC, Label } from './style';

interface IInputProps extends ComponentProps<'input'> {
  error?: string;
  showPassword?: boolean;
  label?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ error, showPassword, label, icon, type, value, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

    function handleShowPassword() {
      setIsPasswordVisible((prevState) => !prevState);
    }

    return (
      <Container>
        <InputC
          {...props}
          ref={ref}
          type={!isPasswordVisible ? 'text' : type}
          color={error}
          label={label}
        />

        {icon && <div className="icon">{icon}</div>}

        {label && <Label>{label}</Label>}

        {showPassword && (
          <button
            type="button"
            className="showPassword"
            onClick={handleShowPassword}
          >
            <EyIcon open={isPasswordVisible} color="#5f3dc4" />
          </button>
        )}

        {error && <FieldError error={error} />}
      </Container>
    );
  },
);
