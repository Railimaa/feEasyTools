import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef, useState } from 'react';

import { Container, Input } from './style';

interface ISearchInputProps extends ComponentProps<'input'> {}

export const SearchInput = forwardRef<HTMLInputElement, ISearchInputProps>(
  ({ ...props }, ref) => {
    const [visibleInput, setVisibleInput] = useState<boolean>(false);

    function handleVisibleInput() {
      setVisibleInput(true);
    }

    return (
      <Container>
        <Input
          {...props}
          ref={ref}
          $visibleInput={visibleInput}
          onClick={handleVisibleInput}
        />

        <MagnifyingGlassIcon color="#fff" className="icon" />
      </Container>
    );
  },
);
