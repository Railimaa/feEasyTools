import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from 'react';

import { Container, InputSearchC } from './style';

interface ISearchInputProps extends ComponentProps<'input'> {}

export const SearchInput = forwardRef<HTMLInputElement, ISearchInputProps>(
  ({ ...props }, ref) => (
    <Container>
      <InputSearchC {...props} ref={ref} />

      <div className="icon">
        <MagnifyingGlassIcon color="#fff" />
      </div>
    </Container>
  ),
);
