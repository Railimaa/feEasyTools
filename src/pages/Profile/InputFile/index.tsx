/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentProps, forwardRef } from 'react';

import { Container, InputC } from './style';

interface IInputFileProps extends ComponentProps<'input'> {
  imagePath: boolean;
}

export const InputFile = forwardRef<HTMLInputElement, IInputFileProps>(
  ({ imagePath, ...props }, ref) => (
    <Container>
      <label htmlFor="file">
        {imagePath ? 'Escolher nova foto!' : 'Adcionar nova foto!'}
      </label>
      <InputC {...props} ref={ref} id="file" />
    </Container>
  ),
);
