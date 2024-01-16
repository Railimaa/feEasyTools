import { ICategoryTransaction } from '../../types/CategoryTransaction';
import { httpClient } from '../httpClient';

type CategoryTransactionResponse = Array<ICategoryTransaction>;

export type CategoryTransactionFilter = {
  type?: 'INCOME' | 'EXPENSE';
};

export async function getAll(filter: CategoryTransactionFilter) {
  const { data } = await httpClient.get<CategoryTransactionResponse>(
    '/categoriesTransactions',
    {
      params: filter,
    },
  );

  return data;
}
