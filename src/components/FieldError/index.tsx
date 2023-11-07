import { Container } from './style';

interface IFieldErrorProps {
  error: string;
}

export function FieldError({ error }: IFieldErrorProps) {
  return (
    <Container>
      <span>{error}</span>
    </Container>
  );
}
