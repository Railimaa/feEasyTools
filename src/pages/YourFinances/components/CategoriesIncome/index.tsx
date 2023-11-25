import {
  ArrowTopRightIcon,
  MagnifyingGlassIcon,
  Pencil1Icon,
} from '@radix-ui/react-icons';

import { CategoryIcon } from '../../../../assets/Icons/categories/CategoryIcon';
import { Button } from '../../../../components/Button';
import { Spinner } from '../../../../components/Spinner';

import { CardCategorie, Container } from './style';
import { useCategoriesIncome } from './useCategoriesIncome';

export function CategoriesIncome() {
  const { categories, isLoading, handleOpenNewCategoryModal } =
    useCategoriesIncome();

  const hasCategories = categories.length > 0;

  return (
    <Container>
      <header>
        <p>Categorias de receitas</p>
        <ArrowTopRightIcon width={20} height={20} color="#087F5B" />
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
            categories.map((categorie) => (
              <CardCategorie key={categorie.id}>
                <div className="iconAndName">
                  <CategoryIcon
                    type={categorie.type === 'EXPENSE' ? 'expense' : 'income'}
                    category={categorie?.icon}
                  />
                  <span>{categorie.name}</span>
                </div>

                <button type="button">
                  <Pencil1Icon width={24} height={24} color="#6741d9" />
                </button>
              </CardCategorie>
            ))}
        </>
      )}
    </Container>
  );
}
