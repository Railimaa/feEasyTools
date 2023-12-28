import { Pencil2Icon } from '@radix-ui/react-icons';

import { ICategoryTask } from '../../../../../types/CategoryTask';

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
      <span>{category.name}</span>

      <button type="button" onClick={() => handleOpenEditedModal(category)}>
        <Pencil2Icon width={18} height={18} color="#fff" />
      </button>
    </Container>
  ));
}
