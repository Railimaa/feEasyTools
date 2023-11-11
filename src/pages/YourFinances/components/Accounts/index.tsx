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
  const {
    sliderState,
    setSliderState,
    windowWidth,
    isLoading,
    accounts,
    arValuesVisible,
    handleVisibleArValues,
    handleOpenNewAccountModal,
  } = useAccounts();

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
            <strong style={{ filter: arValuesVisible ? 'blur(12px)' : 'none' }}>
              {FormatCurrency(1000)}
            </strong>
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
