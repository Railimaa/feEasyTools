import { httpClient } from '../httpClient';

export async function deleted(transactionId: string) {
  await httpClient.delete(`/transactions/${transactionId}`);
}
