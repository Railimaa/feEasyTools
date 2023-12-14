import { useState } from 'react';

import { useBankAccounts } from '../../../../../hooks/useBankAccounts';

export function useFilterModal() {
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
  };
}
