import { httpClient } from '../httpClient';

interface IBodyUpdate {
  id: string;
  name: string;
}

export async function update({ id, ...body }: IBodyUpdate) {
  const { data } = await httpClient.put(`/categoriesTasks/${id}`, body);

  return data;
}
