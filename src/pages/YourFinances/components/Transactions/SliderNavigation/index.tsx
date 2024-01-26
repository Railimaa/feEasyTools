/* eslint-disable react/button-has-type */
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
  const swiper = useSwiper();
  const { theme } = useTheme();

  return (
    <Container>
      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        className="button1"
      >
        <ChevronLeftIcon
          width={24}
          height={24}
          color={theme === 'dark' ? '#fff' : '#000'}
        />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        className="button2"
      >
        <ChevronRightIcon
          width={24}
          height={24}
          color={theme === 'dark' ? '#fff' : '#000'}
        />
      </button>
    </Container>
  );
}
