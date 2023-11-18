import { httpClient } from '../httpClient';

interface ITransactionBody {
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: string;
  type: 'INCOME' | 'EXPENSE';
}

export async function create(body: ITransactionBody) {
  const { data } = await httpClient.post('/transactions', body);

  return data;
}
