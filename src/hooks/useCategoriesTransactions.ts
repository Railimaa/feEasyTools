import { useQuery } from '@tanstack/react-query';

import { categoriesTransactionService } from '../services/categoriesTransactionService';

export function useCategoriesTransaction() {
  const { data, isFetching } = useQuery({
    queryKey: ['categoriesTransaction'],
    queryFn: categoriesTransactionService.getAll,
    staleTime: Infinity,
  });

  return { categoriesTransaction: data ?? [], isFetching };
}
