import { httpClient } from '../httpClient';

interface ITransactionBody {
  id: string;
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: string;
  type: 'INCOME' | 'EXPENSE';
}

export async function update({ id, ...body }: ITransactionBody) {
  const { data } = await httpClient.put(`/transactions/${id}`, body);

  return data;
}
