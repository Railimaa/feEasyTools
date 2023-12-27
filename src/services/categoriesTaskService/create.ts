import { httpClient } from '../httpClient';

interface ICreateCategoryBody {
  name: string;
}

export async function create(body: ICreateCategoryBody) {
  const { data } = await httpClient.post('/categoriesTasks', body);

  return data;
}
