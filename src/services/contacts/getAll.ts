import { IContact } from '../../types/Contact';
import { httpClient } from '../httpClient';

type ContactResponse = Array<IContact>;

export async function getAll() {
  const { data } = await httpClient.get<ContactResponse>('/contacts');

  return data;
}
