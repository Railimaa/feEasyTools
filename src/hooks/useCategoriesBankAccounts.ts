import { useQuery } from '@tanstack/react-query';

import { categoriesBankAccountService } from '../services/categoriesBankAccountService';

export function useCategoriesBankAccounts() {
  const { data, isFetching } = useQuery({
    queryKey: ['categoryBankAccount'],
    queryFn: categoriesBankAccountService.getAll,
    staleTime: Infinity,
  });

  return { categoriesBankAccounts: data ?? [], isLoading: isFetching };
}
