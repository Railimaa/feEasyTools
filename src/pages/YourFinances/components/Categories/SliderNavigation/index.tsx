import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

import { useTheme } from '../../../../../contexts/useTheme';

import { Container } from './style';

interface ISliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function SliderNavigation({
  isBeginning,
  isEnd,
}: ISliderNavigationProps) {
  const { theme } = useTheme();
  const swiper = useSwiper();

  return (
    <Container>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        id="btnRight"
      >
        <ChevronRightIcon
          color={theme === 'dark' ? '#fff' : '#000'}
          width={24}
          height={24}
        />
      </button>

      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        type="button"
        id="btnLeft"
      >
        <ChevronLeftIcon
          color={theme === 'dark' ? '#fff' : '#000'}
          width={24}
          height={24}
        />
      </button>
    </Container>
  );
}
