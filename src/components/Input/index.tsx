/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
import { ComponentProps, forwardRef, useState } from 'react';

import { EyIcon } from '../../assets/Icons/EyeIcon';
import { FieldError } from '../FieldError';

import { Container, InputC, Label } from './style';

interface IInputProps extends ComponentProps<'input'> {
  error?: string;
  showPassword?: boolean;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ error, showPassword, label, type, value, ...props }, ref) => {
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
        />

        <Label>{label}</Label>

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
