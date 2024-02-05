import { httpClient } from '../httpClient';

interface IUpdateBankAccount {
  id: string;
  initialBalance: number;
  name: string;
  categoryId: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
}

export async function update({ id, ...body }: IUpdateBankAccount) {
  const { data } = await httpClient.put(`/bank-accounts/${id}`, body);

  return data;
}
