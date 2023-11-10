import { IBankAccount } from '../../types/BankAccount';
import { httpClient } from '../httpClient';

type BankAccountsResponse = Array<IBankAccount>;

export async function getAll() {
  const { data } = await httpClient.get<BankAccountsResponse>('/bank-accounts');

  return data;
}
