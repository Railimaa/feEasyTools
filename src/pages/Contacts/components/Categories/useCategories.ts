import { useCategoriesContacts } from '../../../../hooks/useCategoriesContact';

export function useCategories() {
  const { categoriesContact, isFetching } = useCategoriesContacts();

  return {
    categories: categoriesContact,
    isLoading: isFetching,
  };
}
