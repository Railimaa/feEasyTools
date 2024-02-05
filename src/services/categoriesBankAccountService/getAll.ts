import { ICategoryBankAccout } from '../../types/CategoryBankAccount';
import { httpClient } from '../httpClient';

type CategoriesResponse = ICategoryBankAccout[];

export async function getAll() {
  const { data } = await httpClient.get<CategoriesResponse>(
    '/categoriesBankAccount',
  );

  return data;
}
