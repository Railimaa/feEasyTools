import { httpClient } from '../httpClient';

interface IUpdateBody {
  id: string;
  name: string;
  description: string | null;
  categoryId: string;
  dueDate: string;
}

export async function update({ id, ...body }: IUpdateBody) {
  const { data } = await httpClient.put(`/tasks/${id}`, body);

  return data;
}
