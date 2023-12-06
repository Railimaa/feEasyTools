import { Pencil1Icon } from '@radix-ui/react-icons';

import { Trash } from '../../../../assets/Icons/Trash';
import { Button } from '../../../../components/Button';
import { Spinner } from '../../../../components/Spinner';

import { Card, Container } from './style';
import { useCategories } from './useCategories';

export function Categories() {
  const { isLoading, categories } = useCategories();

  const hasCategories = categories.length > 0;

  return (
    <Container>
      {isLoading && (
        <div className="isLoading">
          <Spinner />
        </div>
      )}

      {!isLoading && !hasCategories && (
        <div className="emptyList">
          <div className="button">
            <Button>Nova categoria</Button>
          </div>
          <p>
            Você ainda não tem nenhuma categoria cadastrada! Clique no botão{' '}
            <span>”Nova categoria”</span> à cima para cadastrar sua primeira!
          </p>
        </div>
      )}

      {!isLoading && hasCategories && (
        <>
          <header>
            <h3>Categorias</h3>
          </header>

          <Card>
            <small>instagram</small>

            <div className="actions">
              <button type="button">
                <Pencil1Icon width={24} height={24} color="#6741d9" />
              </button>

              <button type="button">
                <Trash />
              </button>
            </div>
          </Card>
        </>
      )}
    </Container>
  );
}
