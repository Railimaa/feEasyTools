import { IContact } from '../../types/Contact';
import { httpClient } from '../httpClient';

type ContactResponse = Array<IContact>;

export type ContactFilter = {
  orderBy?: string;
  categoryId?: string;
};

export async function getAll(filter: ContactFilter) {
  const { data } = await httpClient.get<ContactResponse>('/contacts', {
    params: filter,
  });

  return data;
}
