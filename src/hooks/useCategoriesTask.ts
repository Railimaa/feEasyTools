import { useQuery } from '@tanstack/react-query';

import { categoryTaskService } from '../services/categoriesTaskService';

export function useCategorieTask() {
  const { isFetching, data } = useQuery({
    queryKey: ['categoryTask'],
    queryFn: categoryTaskService.getAll,
    staleTime: Infinity,
  });

  return { isLoading: isFetching, categoriesTask: data ?? [] };
}
