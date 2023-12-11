import { useQuery } from '@tanstack/react-query';

import { transactionsService } from '../services/transactionsService';

export function useTransactions() {
  const { data, isFetching, isInitialLoading, refetch } = useQuery({
    queryKey: ['transactions'],
    queryFn: () =>
      transactionsService.getAll({
        month: 10,
        year: 2023,
      }),
  });

  return {
    transactions: data ?? [],
    isLoading: isFetching,
    isInitialLoading,
    refetchTransactions: refetch,
  };
}
