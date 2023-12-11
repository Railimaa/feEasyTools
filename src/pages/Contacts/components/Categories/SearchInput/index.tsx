import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import React, {
  ComponentProps,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Container, InputSearchC } from './style';

interface IInputSearchProps extends ComponentProps<'input'> {}

export const InputSearch = forwardRef<HTMLInputElement, IInputSearchProps>(
  ({ ...props }, ref) => {
    const [visibleSearchInput, setVisibleSearchInput] =
      useState<boolean>(false);

    function handleVisibleInputSearch() {
      setVisibleSearchInput((prevState) => !prevState);
    }

    const inputFocusRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (visibleSearchInput && inputFocusRef.current) {
        inputFocusRef.current.focus();
      }
    }, [visibleSearchInput]);

    return (
      <Container
        $visibleSearch={visibleSearchInput}
        onClick={handleVisibleInputSearch}
        role="button"
      >
        <InputSearchC
          {...props}
          ref={
            (inputFocusRef as React.MutableRefObject<HTMLInputElement>) || ref
          }
          $visibleSearch={visibleSearchInput}
        />

        <div className="icon">
          <MagnifyingGlassIcon width={18} height={18} color="#fff" />

          <span>Pesquisar categoria...</span>
        </div>
      </Container>
    );
  },
);
