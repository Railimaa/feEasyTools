import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

import { Container } from './style';

interface ISliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function SliderNavigation({
  isBeginning,
  isEnd,
}: ISliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <Container>
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon width={20} height={20} color="#fff" />
      </button>

      <button type="button" onClick={() => swiper.slideNext()} disabled={isEnd}>
        <ChevronRightIcon width={20} height={20} color="#fff" />
      </button>
    </Container>
  );
}
