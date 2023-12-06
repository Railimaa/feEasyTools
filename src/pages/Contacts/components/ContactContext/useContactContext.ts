import { useContext } from 'react';

import { ContactContext } from '.';

export function useContactContext() {
  return useContext(ContactContext);
}
