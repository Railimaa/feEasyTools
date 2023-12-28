import { ITask } from '../../types/Task';
import { httpClient } from '../httpClient';

type TaskResponse = ITask[];

export type TaskFilter = {
  categoryId?: string;
  type?: boolean;
};

export async function getAll(filter: TaskFilter) {
  const { data } = await httpClient.get<TaskResponse>('/tasks', {
    params: filter,
  });

  return data;
}
