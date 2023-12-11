import { httpClient } from '../httpClient';

export async function deleted(id: string) {
  const { data } = await httpClient.delete(`/categoriesContacts/${id}`);

  return data;
}
