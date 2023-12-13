import { ITransactions } from '../../types/Transaction';
import { httpClient } from '../httpClient';

type TransactionResponse = Array<ITransactions>;

export type TransactionFilter = {
  month: number;
  year: number;
  bankAccountId?: string;
  type?: ITransactions['type'];
};

export async function getAll(filter: TransactionFilter) {
  const { data } = await httpClient.get<TransactionResponse>('/transactions', {
    params: filter,
  });

  return data;
}
