import {
  ArrowBottomRightIcon,
  MagnifyingGlassIcon,
  Pencil1Icon,
} from '@radix-ui/react-icons';

import { CategoryIcon } from '../../../../assets/Icons/categories/CategoryIcon';
import { Button } from '../../../../components/Button';
import { Spinner } from '../../../../components/Spinner';

import { CardCategorie, Container } from './style';
import { useCategorieExpense } from './useCategorieExpense';

export function CategoriesExpense() {
  const {
    categories,
    isLoading,
    handleOpenNewCategoryModal,
    handleOpenEditCategoryModal,
  } = useCategorieExpense();

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
              <CardCategorie key={category.id}>
                <div className="iconAndName">
                  <CategoryIcon
                    type={category.type === 'EXPENSE' ? 'expense' : 'income'}
                    category={category?.icon}
                  />
                  <span>{category.name}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenEditCategoryModal(category)}
                >
                  <Pencil1Icon width={24} height={24} color="#6741d9" />
                </button>
              </CardCategorie>
            ))}
        </>
      )}
    </Container>
  );
}
