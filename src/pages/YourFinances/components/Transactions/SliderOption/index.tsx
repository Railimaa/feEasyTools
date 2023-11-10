import { useSwiper } from 'swiper/react';

import { Container } from './style';

interface ISliderOptionProps {
  month: string;
  index: number;
}

export function SliderOption({ month, index }: ISliderOptionProps) {
  const swiper = useSwiper();

  return (
    <Container>
      <button type="button" onClick={() => swiper.slideTo(index)}>
        {month}
      </button>
    </Container>
  );
}
