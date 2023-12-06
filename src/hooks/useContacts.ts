import { useQuery } from '@tanstack/react-query';

import { contactsService } from '../services/contacts';

export function useContacts() {
  const { data, isFetching } = useQuery({
    queryKey: ['contacts'],
    queryFn: contactsService.getAll,
    staleTime: Infinity,
  });

  return {
    contacts: data ?? [],
    isFetching,
  };
}
