import { useQuery } from '@tanstack/react-query';

import { taskService } from '../services/taskService';

export function useTaskss() {
  const { isFetching, data } = useQuery({
    queryKey: ['tasks'],
    queryFn: taskService.getAll,
    staleTime: Infinity,
  });

  return { isLoading: isFetching, tasks: data ?? [] };
}
