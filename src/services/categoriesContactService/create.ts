import { httpClient } from '../httpClient';

interface ICategoryContactBody {
  name: string;
  icon: string | null;
}

export async function create(body: ICategoryContactBody) {
  const { data } = await httpClient.post('/categoriesContacts', body);

  return data;
}
