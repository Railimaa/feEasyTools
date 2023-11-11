import { useContext } from 'react';

import { YourFinancesContext } from '.';

export function useYourFinancesContext() {
  return useContext(YourFinancesContext);
}
