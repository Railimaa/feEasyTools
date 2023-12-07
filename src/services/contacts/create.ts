import { httpClient } from '../httpClient';

interface IContactBody {
  name: string;
  email: string | undefined;
  phone: string | undefined;
  categoryId: string;
}

export async function create(body: IContactBody) {
  const { data } = await httpClient.post('/contacts', body);

  return data;
}
