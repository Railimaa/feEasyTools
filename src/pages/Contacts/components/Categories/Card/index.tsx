import { Pencil1Icon } from '@radix-ui/react-icons';

import { Trash } from '../../../../../assets/Icons/Trash';
import { ICategoryContact } from '../../../../../types/CategoryContact';
import { CategoryContactIcon } from '../DropdownIcons/CategoryContactIcon';
import { iconsMap } from '../DropdownIcons/CategoryContactIcon/iconsMap';

import { Container } from './style';

interface ICardProps {
  categoriesFiltered: ICategoryContact[];
  handleOpenEditedCategoryModal: (category: ICategoryContact) => void;
  handleOpenDeleteModal: (category: ICategoryContact) => void;
}

export function Card({
  categoriesFiltered,
  handleOpenEditedCategoryModal,
  handleOpenDeleteModal,
}: ICardProps) {
  return categoriesFiltered.map((category) => (
    <Container key={category.id}>
      <small>
        {category.name}
        {category.icon && (
          <CategoryContactIcon name={category.icon as keyof typeof iconsMap} />
        )}
      </small>

      <div className="actions">
        <button
          type="button"
          onClick={() => handleOpenEditedCategoryModal(category)}
        >
          <Pencil1Icon width={24} height={24} color="#6741d9" />
        </button>

        <button type="button" onClick={() => handleOpenDeleteModal(category)}>
          <Trash />
        </button>
      </div>
    </Container>
  ));
}
