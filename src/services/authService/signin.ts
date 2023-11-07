import { httpClient } from '../httpClient';

interface ISigninBody {
  email: string;
  password: string;
}

interface ISigninResponse {
  accessToken: string;
}

export async function signin(body: ISigninBody) {
  const { data } = await httpClient.post<ISigninResponse>('/auth/signin', body);

  return data;
}
