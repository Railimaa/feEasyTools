import { useQuery } from '@tanstack/react-query';

import { contactsService } from '../services/contactsService';
import { ContactFilter } from '../services/contactsService/getAll';

export function useContacts(filter: ContactFilter) {
  const { data, isFetching, refetch, isInitialLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => contactsService.getAll(filter),
    staleTime: Infinity,
  });

  return {
    contacts: data ?? [],
    isLoading: isFetching,
    isInitialLoading,
    refetchContacts: refetch,
  };
}
