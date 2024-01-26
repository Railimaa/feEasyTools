import { CategoryIcon } from '../../../../../assets/Icons/categories/CategoryIcon';
import { useTheme } from '../../../../../contexts/useTheme';
import { ICategoryTransaction } from '../../../../../types/CategoryTransaction';

import { Container } from './style';

interface ICardCategoryProps {
  category: ICategoryTransaction;
  handleOpenEditCategoryModal: (category: ICategoryTransaction) => void;
}

export function CardCategory({
  category,
  handleOpenEditCategoryModal,
}: ICardCategoryProps) {
  const { theme } = useTheme();

  return (
    <Container
      theme={theme}
      onClick={() => handleOpenEditCategoryModal(category)}
      role="button"
    >
      <span>{category.name}</span>

      <CategoryIcon
        type={category.type === 'EXPENSE' ? 'expense' : 'income'}
        category={category?.icon}
      />
    </Container>
  );
}
