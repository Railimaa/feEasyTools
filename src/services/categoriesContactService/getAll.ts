import { ICategoryContact } from '../../types/CategoryContact';
import { httpClient } from '../httpClient';

type CategoryResponse = ICategoryContact[];

export async function getAll() {
  const { data } = await httpClient.get<CategoryResponse>(
    '/categoriesContacts',
  );

  return data;
}
