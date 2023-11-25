import { httpClient } from '../httpClient';

interface ICategoriesTransactionBody {
  name: string;
  icon: string;
  type: 'INCOME' | 'EXPENSE';
}

export async function create(body: ICategoriesTransactionBody) {
  const { data } = await httpClient.post('/categoriesTransactions', body);

  return data;
}
