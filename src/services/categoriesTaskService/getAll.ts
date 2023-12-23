import { ICategoryTask } from '../../types/CategoryTask';
import { httpClient } from '../httpClient';

type CategoriesTaskResponse = ICategoryTask[];

export async function getAll() {
  const { data } =
    await httpClient.get<CategoriesTaskResponse>('/categoriesTasks');

  return data;
}
