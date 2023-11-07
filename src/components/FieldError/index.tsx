import { CrossCircledIcon } from '@radix-ui/react-icons';

import { Container } from './style';

interface IFieldErrorProps {
  error: string;
}

export function FieldError({ error }: IFieldErrorProps) {
  return (
    <Container>
      <CrossCircledIcon />
      <span>{error}</span>
    </Container>
  );
}
