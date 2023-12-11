import { httpClient } from '../httpClient';

interface IContactBodyUpdate {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  categoryId: string;
}

export async function update({ id, ...body }: IContactBodyUpdate) {
  const { data } = await httpClient.put(`/contacts/${id}`, body);

  return data;
}
