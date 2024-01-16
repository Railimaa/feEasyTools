import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef, useRef, useState } from 'react';

import { useTheme } from '../../../../../contexts/useTheme';

import { Container, InputC } from './style';

interface IInputSearch extends ComponentProps<'input'> {}

export const InputSearch = forwardRef<HTMLInputElement, IInputSearch>(
  ({ value, ...props }, ref) => {
    const { theme } = useTheme();
    const [visibleInput, setVisibleInput] = useState<boolean>(false);
    const onFocusAutomatic = useRef<HTMLInputElement | null>(null);

    if (visibleInput && onFocusAutomatic.current) {
      onFocusAutomatic.current.focus();
    }

    function handleVisibleInput() {
      setVisibleInput(true);
    }

    function handleOnBlur() {
      if (!value) {
        setVisibleInput(false);
      }
    }

    return (
      <Container onClick={handleVisibleInput}>
        <InputC
          {...props}
          ref={onFocusAutomatic || ref}
          $visibleInput={visibleInput}
          onBlur={handleOnBlur}
          theme={theme}
        />

        <MagnifyingGlassIcon
          color={theme === 'dark' ? '#fff' : '#000'}
          className="icon"
        />
      </Container>
    );
  },
);
