import { httpClient } from '../httpClient';

interface ITaskBody {
  name: string;
  description: string | null;
  categoryId: string;
  dueDate: string;
}

export async function create(body: ITaskBody) {
  const { data } = await httpClient.post('/tasks', body);

  return data;
}
