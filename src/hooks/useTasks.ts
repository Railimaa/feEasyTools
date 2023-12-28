import { useQuery } from '@tanstack/react-query';

import { taskService } from '../services/taskService';
import { TaskFilter } from '../services/taskService/getAll';

export function useTaskss(filter: TaskFilter) {
  const { isFetching, data, refetch, isInitialLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => taskService.getAll(filter),
    staleTime: Infinity,
  });

  return {
    isLoading: isFetching,
    tasks: data ?? [],
    refetchTasks: refetch,
    initialLoading: isInitialLoading,
  };
}
