import { httpClient } from '../httpClient';

interface ICategoriesTransactionBody {
  id: string;
  name: string;
  icon: string;
  type: 'INCOME' | 'EXPENSE';
}

export async function update({ id, ...body }: ICategoriesTransactionBody) {
  const { data } = await httpClient.put(`/categoriesTransactions/${id}`, body);

  return data;
}
