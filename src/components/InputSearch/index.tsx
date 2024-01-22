/* eslint-disable react/require-default-props */
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import {
  CSSProperties,
  ComponentProps,
  forwardRef,
  useRef,
  useState,
} from 'react';

import { Container, Input } from './style';

interface IInputSearchProps extends ComponentProps<'input'> {
  style?: CSSProperties;
}

export const InputSearch = forwardRef<HTMLInputElement, IInputSearchProps>(
  ({ style, value, ...props }, ref) => {
    const [visible, setVisible] = useState<boolean>(false);
    const inputFocusOn = useRef<HTMLInputElement>(null);

    if (visible && inputFocusOn.current) {
      inputFocusOn.current.focus();
    }

    function handleVisibleInput() {
      setVisible(true);
    }

    function handleOnBlur() {
      if (!value) {
        setVisible(false);
      }
    }

    return (
      <Container $visible={visible}>
        <Input
          {...props}
          ref={inputFocusOn || ref}
          $visible={visible}
          onBlur={handleOnBlur}
          style={style}
        />

        <button onClick={handleVisibleInput} type="button">
          <MagnifyingGlassIcon color="#fff" />
        </button>
      </Container>
    );
  },
);
