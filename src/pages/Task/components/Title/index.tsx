import { Container } from './style';

interface ITitleProps {
  word: string;
  animation: 'Y' | 'X';
}

export function Title({ word, animation }: ITitleProps) {
  return (
    <Container $animation={animation}>
      <h1>{word}</h1>
    </Container>
  );
}
