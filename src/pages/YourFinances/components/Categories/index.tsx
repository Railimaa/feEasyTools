import { Spinner } from '../../../../components/Spinner';

import { CardCategory } from './CardCategory';
import { DropdownCategoryFilter } from './DropdownCategoryFilter';
import { EmptyList } from './EmptyList';
import { EmptySearch } from './EmptySearch';
import { InputSearch } from './InputSearch';
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
  } = useCategories();

  const hasCategories = categories.length > 0;
  const isSearchEmptySearch =
    categories.length > 0 && filteredCategories.length < 1;

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

              {!isSearchEmptySearch && !searchInput && (
                <DropdownCategoryFilter
                  handleApplyFilter={handleApplyFilter}
                  selectType={filters.type}
                />
              )}
            </div>
          </header>

          {isSearchEmptySearch && <EmptySearch searchValue={searchInput} />}

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
              <CardCategory
                filteredCategories={filteredCategories}
                handleOpenEditCategoryModal={handleOpenEditCategoryModal}
              />
            )}
          </div>
        </>
      )}
    </Container>
  );
}
