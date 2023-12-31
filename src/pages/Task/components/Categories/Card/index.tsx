import { Pencil2Icon } from '@radix-ui/react-icons';

import { ICategoryTask } from '../../../../../types/CategoryTask';
import { IconsCategory } from '../../IconsDropdown/IconsCategory';
import { iconsMap } from '../../IconsDropdown/IconsCategory/iconsMap';

import { Container } from './style';

interface ICardProps {
  categoriesFiltered: Array<ICategoryTask>;
  handleOpenEditedModal: (category: ICategoryTask) => void;
}

export function Card({
  categoriesFiltered,
  handleOpenEditedModal,
}: ICardProps) {
  return categoriesFiltered.map((category) => (
    <Container key={category.id}>
      <div className="iconAndName">
        {category.icon && (
          <IconsCategory iconName={category.icon as keyof typeof iconsMap} />
        )}

        <span>{category.name}</span>
      </div>

      <button type="button" onClick={() => handleOpenEditedModal(category)}>
        <Pencil2Icon width={18} height={18} color="#fff" />
      </button>
    </Container>
  ));
}
