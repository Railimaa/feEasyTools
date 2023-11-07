import { IUser } from '../../types/User';
import { httpClient } from '../httpClient';

type MeResponse = IUser;

export async function me() {
  const { data } = await httpClient.get<MeResponse>('/users/me');

  return data;
}
