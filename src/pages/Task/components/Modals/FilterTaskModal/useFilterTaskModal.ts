import { useState } from 'react';

import { useCategorieTask } from '../../../../../hooks/useCategoriesTask';

export function useFilterTaskModal() {
  const { categoriesTask } = useCategorieTask();
  const [selectCategory, setSelectCategory] = useState<string | undefined>(
    undefined,
  );

  function handleCategory(categoryId: string) {
    setSelectCategory((prevState) =>
      prevState === categoryId ? undefined : categoryId,
    );
  }

  return {
    categories: categoriesTask,
    selectCategory,
    handleCategory,
  };
}
