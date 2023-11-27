import { Pencil1Icon } from '@radix-ui/react-icons';

import { CategoryIcon } from '../../../../../../assets/Icons/categories/CategoryIcon';
import { Trash } from '../../../../../../assets/Icons/Trash';
import { ICategoryTransaction } from '../../../../../../types/CategoryTransaction';

import { Container } from './style';

interface ICardCategoryProps {
  category: ICategoryTransaction;
  handleOpenEditCategoryModal: (category: ICategoryTransaction) => void;
  handleOpenDeleteModal: (category: ICategoryTransaction) => void;
}

export function CardCategory({
  category,
  handleOpenEditCategoryModal,
  handleOpenDeleteModal,
}: ICardCategoryProps) {
  return (
    <Container>
      <div className="iconAndName">
        <CategoryIcon
          type={category.type === 'EXPENSE' ? 'expense' : 'income'}
          category={category?.icon}
        />
        <span>{category.name}</span>
      </div>

      <div className="actions">
        <button
          type="button"
          onClick={() => handleOpenEditCategoryModal(category)}
        >
          <Pencil1Icon width={24} height={24} color="#6741d9" />
        </button>

        <button type="button" onClick={() => handleOpenDeleteModal(category)}>
          <Trash />
        </button>
      </div>
    </Container>
  );
}
