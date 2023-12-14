import { Container } from './style';
import { useTitle } from './useTitle';

export function Title() {
  const { words, currentWordIndex } = useTitle();

  return (
    <Container>
      <h1>{words[currentWordIndex]}</h1>
    </Container>
  );
}
