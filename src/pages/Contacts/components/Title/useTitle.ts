/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export function useTitle() {
  const words = ['Seus contatos!', 'Suas categorias!', 'Em um só lugar!'];
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentWordIndex((prevState) => (prevState + 1) % words.length);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [words, currentWordIndex]);

  return {
    words,
    currentWordIndex,
  };
}
