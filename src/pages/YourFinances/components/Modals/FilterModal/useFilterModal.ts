import { useState } from 'react';

import { useTheme } from '../../../../../contexts/useTheme';
import { useBankAccounts } from '../../../../../hooks/useBankAccounts';

export function useFilterModal() {
  const { theme } = useTheme();
  const { accounts } = useBankAccounts();

  const [selectYear, setSelectYear] = useState(new Date().getFullYear());

  const [selectBankAccount, setSelectBankAccount] = useState<
    string | undefined
  >(undefined);

  function handleChangeYear(step: number) {
    setSelectYear((prevState) => prevState + step);
  }

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectBankAccount((prevState) =>
      prevState === bankAccountId ? undefined : bankAccountId,
    );
  }

  return {
    accounts,
    selectYear,
    handleChangeYear,
    selectBankAccount,
    handleSelectBankAccount,
    theme,
  };
}
