import { Swiper, SwiperSlide } from 'swiper/react';

import { FilterIcon } from '../../../../assets/Icons/FIlterIcon';
import emptyState from '../../../../assets/images/empty-state.svg';
import { Spinner } from '../../../../components/Spinner';
import { MONTHS } from '../../../../utils/constants';
import { EditTransactionModal } from '../Modals/EditTransactionModal';
import { FilterModal } from '../Modals/FilterModal';

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
    isLoading,
    transactions,
    arValuesVisible,
    openEditTransactionModal,
    handleOpenEditTransactionModal,
    handleCloseEditTransactionModal,
    transactionIsBeingEdited,
    filters,
    handleChangeFilters,
    openFilterModal,
    handleCloseFilterModal,
    handleOpenFilterModal,
    handleApplyFilters,
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
          <FilterModal
            open={openFilterModal}
            handleCloseFilterModal={handleCloseFilterModal}
            onApplyFilters={handleApplyFilters}
          />

          <Header>
            <TransactionTypeDropdownMenu
              onSelect={handleChangeFilters('type')}
              selectType={filters.type}
            />

            <button type="button" onClick={handleOpenFilterModal}>
              <FilterIcon />
            </button>
          </Header>

          <div className="sliderMonth">
            <Swiper
              slidesPerView={3}
              centeredSlides
              initialSlide={filters.month}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                handleChangeFilters('month')(swiper.realIndex);
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
            {isLoading && (
              <div className="isLoading">
                <Spinner width="28" height="28" color="#5f3dc4" />
              </div>
            )}

            {!isLoading && !hasTransactions && (
              <div className="isEmpty">
                <img src={emptyState} alt="" />
                <span>Não encontramos nenhuma transação!</span>
              </div>
            )}

            {!isLoading && hasTransactions && (
              <>
                {transactionIsBeingEdited && (
                  <EditTransactionModal
                    open={openEditTransactionModal}
                    handleCloseModal={handleCloseEditTransactionModal}
                    transaction={transactionIsBeingEdited}
                  />
                )}

                {transactions.map((transaction) => (
                  <TransactionCard
                    key={transaction.id}
                    transaction={transaction}
                    valuesVisible={arValuesVisible}
                    handleOpenEditModal={handleOpenEditTransactionModal}
                  />
                ))}
              </>
            )}
          </div>
        </>
      )}
    </Container>
  );
}
