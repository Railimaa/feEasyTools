/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { Container } from './style';

export function TitleCategories() {
  const words: string[] = ['Suas  💜', 'Suas categorias 🖤', 'Do seu jeito 🤍'];
  const [wordIndex, setWordIndex] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWordIndex((prevState) => (prevState + 1) % words.length);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [words]);

  return (
    <Container>
      <h1>{words[wordIndex]}</h1>
    </Container>
  );
}
