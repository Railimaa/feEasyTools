import {
  ArrowBottomRightIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';

import { Button } from '../../../../components/Button';
import { ConfirmDeleteModal } from '../../../../components/ConfirmDeleteModal';
import { Spinner } from '../../../../components/Spinner';

import { CardCategory } from './CardCategory';
import { Container } from './style';
import { useCategorieExpense } from './useCategorieExpense';

export function CategoriesExpense() {
  const {
    categories,
    isLoading,
    handleOpenNewCategoryModal,
    handleOpenEditCategoryModal,
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteCategory,
    isLoadingDelete,
  } = useCategorieExpense();

  if (openDeleteModal) {
    return (
      <ConfirmDeleteModal
        title="categoria"
        onClose={handleCloseDeleteModal}
        isLoading={isLoadingDelete}
        onConfirm={handleDeleteCategory}
      />
    );
  }

  const hasCategories = categories.length > 0;

  return (
    <Container>
      <header>
        <p>Categorias de despesas</p>
        <ArrowBottomRightIcon width={20} height={20} color="#e03131" />
      </header>

      {isLoading && (
        <div className="isLoading">
          <Spinner width="28" height="28" color="#5f3dc4" />
        </div>
      )}

      {!isLoading && (
        <>
          {!hasCategories && (
            <>
              <div className="notCategories">
                <span>Nenhuma categoria cadastrada!</span>
                <MagnifyingGlassIcon width={20} height={20} color="#fff" />
              </div>

              <div className="btn">
                <Button onClick={handleOpenNewCategoryModal}>
                  Cadastrar categoria
                </Button>
              </div>
            </>
          )}

          {hasCategories &&
            categories.map((category) => (
              <CardCategory
                key={category.id}
                category={category}
                handleOpenDeleteModal={handleOpenDeleteModal}
                handleOpenEditCategoryModal={handleOpenEditCategoryModal}
              />
            ))}
        </>
      )}
    </Container>
  );
}
