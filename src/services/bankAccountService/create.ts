import { httpClient } from '../httpClient';

interface ICreateBankAccountBody {
  initialBalance: number;
  name: string;
  categoryId: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
}

export async function create(body: ICreateBankAccountBody) {
  const { data } = await httpClient.post('/bank-accounts', body);

  return data;
}
