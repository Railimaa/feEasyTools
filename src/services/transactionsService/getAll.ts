import { ITransactions } from '../../types/Transaction';
import { httpClient } from '../httpClient';

type TransactionResponse = Array<ITransactions>;

export type TransactionFilters = {
  month: number;
  year: number;
};

export async function getAll(filters: TransactionFilters) {
  const { data } = await httpClient.get<TransactionResponse>('/transactions', {
    params: filters,
  });

  return data;
}
