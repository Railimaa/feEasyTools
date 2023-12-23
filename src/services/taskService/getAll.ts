import { ITask } from '../../types/Task';
import { httpClient } from '../httpClient';

type TaskResponse = ITask[];

export async function getAll() {
  const { data } = await httpClient.get<TaskResponse>('/tasks');

  return data;
}
