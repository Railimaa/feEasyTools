import { useQuery } from '@tanstack/react-query';

import { categoriesContactService } from '../services/categoriesContactService';

export function useCategoriesContacts() {
  const { data, isFetching } = useQuery({
    queryKey: ['categoryContact'],
    queryFn: categoriesContactService.getAll,
    staleTime: Infinity,
  });

  return {
    categoriesContact: data ?? [],
    isFetching,
  };
}
