import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from 'react';

import { Container, InputSearchC } from './style';

interface ISearchInputProps extends ComponentProps<'input'> {
  qtyOfContacts: number;
}

export const SearchInput = forwardRef<HTMLInputElement, ISearchInputProps>(
  ({ qtyOfContacts, ...props }, ref) => (
    <Container>
      {qtyOfContacts > 0 && (
        <>
          <InputSearchC {...props} ref={ref} />

          <div className="icon">
            <MagnifyingGlassIcon color="#fff" />
          </div>
        </>
      )}
    </Container>
  ),
);
