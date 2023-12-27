import { EmptyBox } from '../../../../assets/Icons/EmptyBox';
import { Spinner } from '../../../../components/Spinner';
import { EditedCategoryModal } from '../Modals/EditedCategoryModal';

import Card from './Card';
import { SearchInput } from './SearchInput';
import { SearchNotFound } from './SearchNotFound';
import { Container } from './style';
import { useCategories } from './useCategories';

export function Categories() {
  const {
    isLoading,
    categories,
    openEditedCategoryModal,
    categoryBeingEdited,
    handleCloseEditedCategoryModal,
    handleOpenEditedCategoryModal,
    handleChangeSearchInput,
    searchInput,
    categoriesFiltered,
  } = useCategories();

  const hasCategories = categories.length > 0;
  const isEmptyList = categories.length > 0 && categoriesFiltered.length < 1;

  return (
    <Container>
      {isLoading && (
        <div className="isLoading">
          <Spinner width="40" height="40" />
        </div>
      )}

      {!isLoading && !hasCategories && (
        <div className="notCategories">
          <EmptyBox />
          <span>Você ainda não tem nenhuma categoria!</span>
        </div>
      )}

      {!isLoading && hasCategories && (
        <>
          <SearchInput
            value={searchInput}
            onChange={handleChangeSearchInput}
            placeholder="Pesquisar categoria..."
          />

          {isEmptyList && <SearchNotFound searchValue={searchInput} />}

          {categoryBeingEdited && (
            <EditedCategoryModal
              open={openEditedCategoryModal}
              handleCloseModal={handleCloseEditedCategoryModal}
              category={categoryBeingEdited}
            />
          )}

          <div className="content">
            <Card
              categoriesFiltered={categoriesFiltered}
              handleOpenEditedModal={handleOpenEditedCategoryModal}
            />
          </div>
        </>
      )}
    </Container>
  );
}
