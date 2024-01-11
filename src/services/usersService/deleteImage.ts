import { httpClient } from '../httpClient';

export async function deletedImage(id: string) {
  const { data } = await httpClient.delete(`/users/${id}`);

  return data;
}
