import { httpClient } from '../httpClient';

interface IUpdateCategoryBody {
  id: string;
  name: string;
}

export async function update({ id, ...body }: IUpdateCategoryBody) {
  const { data } = await httpClient.put(`/categoriesContacts/${id}`, body);

  return data;
}
