/* eslint-disable react/button-has-type */
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

import { Container } from './style';

export function SliderNavigation() {
  const swiper = useSwiper();

  return (
    <Container>
      <button onClick={() => swiper.slidePrev()} className="button1">
        <ChevronLeftIcon width={24} height={24} color="#fff" />
      </button>

      <button onClick={() => swiper.slideNext()} className="button2">
        <ChevronRightIcon width={24} height={24} color="#fff" />
      </button>
    </Container>
  );
}
