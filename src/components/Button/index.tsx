/* eslint-disable react/require-default-props */
import { ComponentProps } from 'react';

import { Spinner } from '../Spinner';

import { ButtonC, Container } from './style';

interface IButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  variant?: 'danger' | 'ghost';
}

export function Button({
  isLoading,
  variant,
  disabled,
  children,
  ...props
}: IButtonProps) {
  return (
    <Container>
      <ButtonC disabled={isLoading || disabled} color={variant} {...props}>
        {!isLoading && children}

        {isLoading && (
          <div className="loader">
            <Spinner />
          </div>
        )}
      </ButtonC>
    </Container>
  );
}
