import { httpClient } from '../httpClient';

interface ICreateCategoryBody {
  name: string;
  icon: string | null;
}

export async function create(body: ICreateCategoryBody) {
  const { data } = await httpClient.post('/categoriesTasks', body);

  return data;
}
