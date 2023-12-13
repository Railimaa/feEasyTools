import { httpClient } from '../httpClient';

interface IContactBody {
  name: string;
  email: string | null;
  phone: string | null;
  categoryId: string;
}

export async function create(body: IContactBody) {
  const { data } = await httpClient.post('/contacts', body);

  return data;
}
