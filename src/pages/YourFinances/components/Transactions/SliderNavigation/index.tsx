/* eslint-disable react/button-has-type */
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

import { useTheme } from '../../../../../contexts/useTheme';

import { Container } from './style';

export function SliderNavigation() {
  const swiper = useSwiper();
  const { theme } = useTheme();

  return (
    <Container>
      <button onClick={() => swiper.slidePrev()} className="button1">
        <ChevronLeftIcon
          width={24}
          height={24}
          color={theme === 'dark' ? '#fff' : '#000'}
        />
      </button>

      <button onClick={() => swiper.slideNext()} className="button2">
        <ChevronRightIcon
          width={24}
          height={24}
          color={theme === 'dark' ? '#fff' : '#000'}
        />
      </button>
    </Container>
  );
}
