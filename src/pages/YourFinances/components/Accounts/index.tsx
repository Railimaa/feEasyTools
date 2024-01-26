/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
import 'swiper/css';
import 'swiper/css/effect-cards';

import { PlusIcon } from '@radix-ui/react-icons';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EyIcon } from '../../../../assets/Icons/EyeIcon';
import { Spinner } from '../../../../components/Spinner';
import { FormatCurrency } from '../../../../utils/formatCurrency';

import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { Container } from './style';
import { useAccounts } from './useAccounts';

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    isLoading,
    accounts,
    arValuesVisible,
    handleVisibleArValues,
    handleOpenNewAccountModal,
    currentBalance,
    theme,
  } = useAccounts();

  const hasAccounts = accounts.length > 0;

  return (
    <Container theme={theme} $arValuesVisible={arValuesVisible}>
      {isLoading && (
        <div className="loading">
          <Spinner color="#5f3dc4" width="36" height="36" />
        </div>
      )}

      {!isLoading && (
        <>
          <span id="title">Saldo total</span>

          <div className="saldoTotal">
            <strong>{FormatCurrency(currentBalance)}</strong>

            <button type="button" onClick={handleVisibleArValues}>
              <EyIcon open={arValuesVisible} />
            </button>
          </div>

          {!hasAccounts && (
            <div className="notAccounts">
              <div className="titleNotAccounts">
                <strong>Minhas contas</strong>
              </div>

              <div className="ContainerButton">
                <button type="button" onClick={handleOpenNewAccountModal}>
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
                  slidesPerView={windowWidth >= 500 ? 1.9 : 1.1}
                  onSlideChange={(swiper) => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    });
                  }}
                  modules={[EffectCards]}
                  effect="cards"
                  cardsEffect={{
                    perSlideOffset: windowWidth >= 500 ? 12 : 8,
                    perSlideRotate: windowWidth >= 500 ? 4 : 5,
                  }}
                  centeredSlides
                  speed={500}
                >
                  <div className="titleAcc" slot="container-start">
                    <strong>Minhas contas</strong>

                    <SliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </div>

                  {accounts.map((account) => (
                    <SwiperSlide key={account.id}>
                      <AccountCard
                        account={account}
                        valuesVisible={arValuesVisible}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
}
