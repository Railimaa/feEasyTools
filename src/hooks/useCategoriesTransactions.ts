import { useQuery } from '@tanstack/react-query';

import { categoriesTransactionService } from '../services/categoriesTransactionService';
import { CategoryTransactionFilter } from '../services/categoriesTransactionService/getAll';

export function useCategoriesTransaction(filter: CategoryTransactionFilter) {
  const { data, isFetching, refetch, isInitialLoading } = useQuery({
    queryKey: ['categoriesTransaction'],
    queryFn: () => categoriesTransactionService.getAll(filter),
    staleTime: Infinity,
  });

  return {
    categoriesTransaction: data ?? [],
    isFetching,
    refetchCategories: refetch,
    isInitialLoading,
  };
}
