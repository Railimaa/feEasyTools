import { Button } from '../../../../../components/Button';
import { Modal } from '../../../../../components/Modal';

import { Container } from './style';
import { useFilterTaskModal } from './useFilterTaskModal';

interface IFilterTaskModal {
  open: boolean;
  handleCloseModal: () => void;
  handleApplyFilterCategoryId: (category: string | undefined) => void;
}

export function FilterTaskModal({
  open,
  handleCloseModal,
  handleApplyFilterCategoryId,
}: IFilterTaskModal) {
  const { categories, selectCategory, handleCategory } = useFilterTaskModal();

  return (
    <Modal open={open} onClose={handleCloseModal} title="Filtrar">
      <Container>
        <span>Categorias</span>
        {categories.map((category) => (
          <button
            onClick={() => handleCategory(category.id)}
            className={category.id === selectCategory ? 'btn-active' : ''}
            type="button"
            key={category.id}
            id="filter"
          >
            {category.name}
          </button>
        ))}

        <Button onClick={() => handleApplyFilterCategoryId(selectCategory)}>
          Aplicar filtro
        </Button>
      </Container>
    </Modal>
  );
}
