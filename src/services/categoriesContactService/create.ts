import { httpClient } from '../httpClient';

interface ICategoryContactBody {
  name: string;
}

export async function create(body: ICategoryContactBody) {
  const { data } = await httpClient.post('/categoriesContacts', body);

  return data;
}
