import { CategoryIcon } from '../../../../../assets/Icons/categories/CategoryIcon';
import { useTheme } from '../../../../../contexts/useTheme';
import { ICategoryTransaction } from '../../../../../types/CategoryTransaction';

import { Container } from './style';

interface ICardCategoryProps {
  filteredCategories: ICategoryTransaction[];
  handleOpenEditCategoryModal: (category: ICategoryTransaction) => void;
}

export function CardCategory({
  filteredCategories,
  handleOpenEditCategoryModal,
}: ICardCategoryProps) {
  const { theme } = useTheme();

  return filteredCategories.map((category) => (
    <Container
      theme={theme}
      onClick={() => handleOpenEditCategoryModal(category)}
      key={category.id}
      role="button"
    >
      <span>{category.name}</span>

      <CategoryIcon
        type={category.type === 'EXPENSE' ? 'expense' : 'income'}
        category={category?.icon}
      />
    </Container>
  ));
}
