import { useSwiper } from 'swiper/react';

import { useTheme } from '../../../../../contexts/useTheme';

import { Container } from './style';

interface ISliderOptionProps {
  month: string;
  index: number;
}

export function SliderOption({ month, index }: ISliderOptionProps) {
  const { theme } = useTheme();
  const swiper = useSwiper();

  return (
    <Container theme={theme}>
      <button type="button" onClick={() => swiper.slideTo(index)}>
        {month}
      </button>
    </Container>
  );
}
