import { httpClient } from '../httpClient';

export async function deleted(bankAccountId: string) {
  await httpClient.delete(`/bank-accounts/${bankAccountId}`);
}
