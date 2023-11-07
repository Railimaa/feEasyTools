/* eslint-disable react/require-default-props */
import { ComponentProps } from 'react';

import { Spinner } from '../Spinner';

import { ButtonC, Container } from './style';

interface IButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({
  isLoading,
  disabled,
  children,
  ...props
}: IButtonProps) {
  return (
    <Container>
      <ButtonC {...props} disabled={isLoading || disabled}>
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
