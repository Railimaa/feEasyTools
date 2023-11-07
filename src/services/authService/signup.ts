import { httpClient } from '../httpClient';

interface ISignupBody {
  name: string;
  secondName: string;
  email: string;
  password: string;
}

interface ISignupResponse {
  accessToken: string;
}

export async function signup(body: ISignupBody) {
  const { data } = await httpClient.post<ISignupResponse>('/auth/signup', body);

  return data;
}
