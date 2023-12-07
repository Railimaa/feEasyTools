import { httpClient } from '../httpClient';

interface IContactBodyUpdate {
  id: string;
  name: string;
  email: string | undefined;
  phone: string | undefined;
  categoryId: string;
}

export async function update({ id, ...body }: IContactBodyUpdate) {
  const { data } = await httpClient.put(`/contacts/${id}`, body);

  return data;
}
