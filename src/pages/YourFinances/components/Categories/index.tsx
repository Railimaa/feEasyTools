import 'swiper/css';
import 'swiper/css/effect-cube';
import { EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { InputSearch } from '../../../../components/InputSearch';
import { Spinner } from '../../../../components/Spinner';

import { CardCategory } from './CardCategory';
import { DropdownCategoryFilter } from './DropdownCategoryFilter';
import { EmptyList } from './EmptyList';
import { EmptySearch } from './EmptySearch';
import { SliderNavigation } from './SliderNavigation';
import { Container } from './style';
import { useCategories } from './useCategories';

export function Categories() {
  const {
    categories,
    isInitialLoading,
    isLoading,
    handleOpenNewCategoryModal,
    handleOpenEditCategoryModal,
    theme,
    handleApplyFilter,
    filters,
    searchInput,
    handleSearchInputChange,
    filteredCategories,
    sliderState,
    setSliderState,
  } = useCategories();

  const hasCategories = categories.length > 0;
  const isSearchEmpty = categories.length > 0 && filteredCategories.length < 1;

  return (
    <Container theme={theme}>
      {isInitialLoading && (
        <div className="isInitialLoading">
          <Spinner width="36" height="36" color="#5f3dc4" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <header>
            <div className="actions">
              {hasCategories && (
                <InputSearch
                  placeholder="Buscar categoria..."
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
              )}

              {!searchInput && (
                <DropdownCategoryFilter
                  handleApplyFilter={handleApplyFilter}
                  selectType={filters.type}
                />
              )}
            </div>
          </header>

          {isSearchEmpty && <EmptySearch searchValue={searchInput} />}

          <div className="content">
            {isLoading && (
              <div className="isLoading">
                <Spinner width="28" height="28" />
              </div>
            )}

            {!isLoading && !hasCategories && (
              <EmptyList
                handleOpenNewCategoryModal={handleOpenNewCategoryModal}
              />
            )}

            {!isLoading && hasCategories && (
              <Swiper
                slidesPerView={1.6}
                spaceBetween={12}
                modules={[EffectCube]}
                effect="cube"
                cubeEffect={{
                  shadowOffset: 80,
                  shadowScale: 1,
                }}
                speed={600}
                onSlideChange={(swiper) => {
                  setSliderState({
                    isBeginning: swiper.isBeginning,
                    isEnd: swiper.isEnd,
                  });
                }}
              >
                <SliderNavigation
                  isBeginning={sliderState.isBeginning}
                  isEnd={sliderState.isEnd}
                />
                {filteredCategories.map((category) => (
                  <SwiperSlide key={category.id}>
                    <CardCategory
                      category={category}
                      handleOpenEditCategoryModal={handleOpenEditCategoryModal}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </>
      )}
    </Container>
  );
}
