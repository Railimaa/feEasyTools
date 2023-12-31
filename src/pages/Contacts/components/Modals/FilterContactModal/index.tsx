import { Button } from '../../../../../components/Button';
import { Modal } from '../../../../../components/Modal';
import { CategoryContactIcon } from '../../Categories/DropdownIcons/CategoryContactIcon';
import { iconsMap } from '../../Categories/DropdownIcons/CategoryContactIcon/iconsMap';

import { Container, Content } from './style';
import { useFilterContactModal } from './useFilterContactModal';

interface IFilterContactModalProps {
  open: boolean;
  handleCloseFilterModal: () => void;
  handleCategoryFilter: (categoryId: string | undefined) => void;
}

export function FilterContactModal({
  open,
  handleCloseFilterModal,
  handleCategoryFilter,
}: IFilterContactModalProps) {
  const { categories, selectCategory, handleSelectCategory } =
    useFilterContactModal();

  return (
    <Modal open={open} onClose={handleCloseFilterModal} title="Filtrar">
      <Container>
        <span>Filtre os contatos por categoria!</span>

        <Content>
          {categories.map((category) => (
            <button
              onClick={() => handleSelectCategory(category.id)}
              className={category.id === selectCategory ? 'btn-active' : ''}
              key={category.id}
              type="button"
            >
              {category.name}
              {category.icon && (
                <CategoryContactIcon
                  name={category.icon as keyof typeof iconsMap}
                />
              )}
            </button>
          ))}
        </Content>

        <div className="submit">
          <Button onClick={() => handleCategoryFilter(selectCategory)}>
            Filtar
          </Button>
        </div>
      </Container>
    </Modal>
  );
}
