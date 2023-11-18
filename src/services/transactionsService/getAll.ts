import { ITransactions } from '../../types/Transaction';
import { httpClient } from '../httpClient';

type TransactionResponse = Array<ITransactions>;

export async function getAll() {
  const { data } = await httpClient.get<TransactionResponse>(
    '/transactions?month=10&year=2023',
  );

  return data;
}
