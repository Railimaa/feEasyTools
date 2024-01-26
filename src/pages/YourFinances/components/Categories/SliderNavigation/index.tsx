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
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        id="btnRight"
      >
        <ChevronRightIcon color="#fff" width={24} height={24} />
      </button>

      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        type="button"
        id="btnLeft"
      >
        <ChevronLeftIcon color="#fff" width={24} height={24} />
      </button>
    </Container>
  );
}
