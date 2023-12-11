import { ConfirmDeleteModal } from '../../../../components/ConfirmDeleteModal';
import { Spinner } from '../../../../components/Spinner';

import Card from './Card';
import { EmptyList } from './EmptyList';
import { InputSearch } from './SearchInput';
import { SearchNotFound } from './SearchNotFounder';
import { Container } from './style';
import { useCategories } from './useCategories';

export function Categories() {
  const {
    isLoading,
    categories,
    handleOpenEditedCategoryModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteCategory,
    isLoadingDelete,
    openDeleteModal,
    searchValue,
    handleChangeSearchValue,
    categoriesFiltered,
  } = useCategories();

  const hasCategories = categories.length > 0;
  const searchNotFound = categories.length > 0 && categoriesFiltered.length < 1;

  if (openDeleteModal) {
    return (
      <ConfirmDeleteModal
        title="categoria"
        onConfirm={handleDeleteCategory}
        onClose={handleCloseDeleteModal}
        isLoading={isLoadingDelete}
      />
    );
  }

  return (
    <Container>
      {isLoading && (
        <div className="isLoading">
          <Spinner />
        </div>
      )}

      {!isLoading && !hasCategories && <EmptyList />}

      {!isLoading && hasCategories && (
        <>
          <header>
            <h3>Categorias</h3>
          </header>

          <InputSearch value={searchValue} onChange={handleChangeSearchValue} />

          {searchNotFound && <SearchNotFound searchValue={searchValue} />}

          <div className="content">
            <Card
              categoriesFiltered={categoriesFiltered}
              handleOpenEditedCategoryModal={handleOpenEditedCategoryModal}
              handleOpenDeleteModal={handleOpenDeleteModal}
            />
          </div>
        </>
      )}
    </Container>
  );
}
