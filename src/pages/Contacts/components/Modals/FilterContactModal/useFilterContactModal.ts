import { useMemo, useState } from 'react';

import { useCategoriesContacts } from '../../../../../hooks/useCategoriesContact';

export function useFilterContactModal() {
  const { categoriesContact } = useCategoriesContacts();

  const [selectCategory, setSelectCategory] = useState<string | undefined>(
    undefined,
  );

  function handleSelectCategory(categoryId: string) {
    setSelectCategory((prevState) =>
      prevState === categoryId ? undefined : categoryId,
    );
  }

  const categories = useMemo(() => categoriesContact, [categoriesContact]);
  return {
    categoriesContact,
    selectCategory,
    handleSelectCategory,
    categories,
  };
}
