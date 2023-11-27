import { httpClient } from '../httpClient';

export async function deleted(id: string) {
  const { data } = await httpClient.delete(`/categoriesTransactions/${id}`);

  return data;
}
