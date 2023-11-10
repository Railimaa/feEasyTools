import { Swiper, SwiperSlide } from 'swiper/react';

import { FilterIcon } from '../../../../assets/Icons/FIlterIcon';
import emptyState from '../../../../assets/images/empty-state.svg';
import { Spinner } from '../../../../components/Spinner';
import { MONTHS } from '../../../../utils/constants';

import { SliderNavigation } from './SliderNavigation';
import { SliderOption } from './SliderOption';
import { Container, Header } from './style';
import { TransactionCard } from './TransactionCard';
import { TransactionTypeDropdownMenu } from './TransactionTypeDropdownMenu';
import { useTransaction } from './useTransaction';

export function Transactions() {
  const {
    activeIndex,
    setActiveIndex,
    isInitialLoading,
    isloading,
    transactions,
  } = useTransaction();

  const hasTransactions = transactions.length > 0;

  return (
    <Container>
      {isInitialLoading && (
        <div className="initialLoading">
          <Spinner width="36" height="36" color="#5f3dc4" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <Header>
            <TransactionTypeDropdownMenu />

            <button type="button">
              <FilterIcon />
            </button>
          </Header>

          <div className="sliderMonth">
            <Swiper
              slidesPerView={3}
              centeredSlides
              initialSlide={1}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
            >
              <SliderNavigation />
              {MONTHS.map((month, index) => (
                <SwiperSlide
                  key={month}
                  className={activeIndex === index ? 'activeSlide' : ''}
                >
                  <SliderOption index={index} month={month} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="content">
            {isloading && (
              <div className="isLoading">
                <Spinner width="28" height="28" color="#5f3dc4" />
              </div>
            )}

            {!isloading && !hasTransactions && (
              <div className="isEmpty">
                <img src={emptyState} alt="" />
                <span>Não encontramos nenhuma transação!</span>
              </div>
            )}

            {!isloading && hasTransactions && (
              <>
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
              </>
            )}
          </div>
        </>
      )}
    </Container>
  );
}
