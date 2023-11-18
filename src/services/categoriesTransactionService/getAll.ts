import { ICategoryTransaction } from '../../types/CategoryTransaction';
import { httpClient } from '../httpClient';

type CategoryTransactionResponse = Array<ICategoryTransaction>;

export async function getAll() {
  const { data } = await httpClient.get<CategoryTransactionResponse>(
    '/categoriesTransactions',
  );

  return data;
}
