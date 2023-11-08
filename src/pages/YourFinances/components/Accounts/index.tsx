/* eslint-disable no-unused-expressions */
import { PlusIcon } from '@radix-ui/react-icons';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EyIcon } from '../../../../assets/Icons/EyeIcon';
import { Spinner } from '../../../../components/Spinner';
import { FormatCurrency } from '../../../../utils/formatCurrency';

import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { Container } from './style';
import { useAccounts } from './useAccounts';

export function Accounts() {
  const { sliderState, setSliderState, windowWidth, isLoading, accounts } =
    useAccounts();

  const hasAccounts = accounts.length > 0;

  return (
    <Container>
      {isLoading && (
        <div className="loading">
          <Spinner color="#5f3dc4" width="36" height="36" />
        </div>
      )}

      {!isLoading && (
        <>
          <span id="title">Saldo total</span>

          <div className="saldoTotal">
            <strong>{FormatCurrency(1000)}</strong>
            <button type="button">
              <EyIcon open />
            </button>
          </div>

          {!hasAccounts && (
            <div className="notAccounts">
              <div className="titleNotAccounts">
                <strong>Minhas contas</strong>
              </div>

              <div className="ContainerButton">
                <button type="button">
                  <PlusIcon width={24} height={24} color="#fff" />
                </button>
                <span>Cadastrar uma nova conta</span>
              </div>
            </div>
          )}

          {hasAccounts && (
            <div className="myAcc">
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth >= 500 ? 2.1 : 1.1}
                  onSlideChange={(swiper) => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    });
                  }}
                >
                  <div className="titleAcc" slot="container-start">
                    <strong>Minhas contas</strong>

                    <SliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </div>

                  <SwiperSlide>
                    <AccountCard
                      name="Nubank"
                      color="#5f3dc4"
                      type="CHECKING"
                      currentBalance={2000}
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <AccountCard
                      name="Inter"
                      color="#fa7a32"
                      type="CHECKING"
                      currentBalance={10000}
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <AccountCard
                      name="XP Investimentos"
                      color="#000"
                      type="INVESTMENT"
                      currentBalance={20000}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
}
