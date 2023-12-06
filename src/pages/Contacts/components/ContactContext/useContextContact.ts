import { useContext } from 'react';

import { ContactContext } from '.';

export function useContextContact() {
  return useContext(ContactContext);
}
