import { httpClient } from '../httpClient';

interface IUpdateUserBody {
  id: string;
  name: string;
  secondName: string;
  email: string;
  imagePath?: File | undefined;
}
export async function update({ id, ...body }: IUpdateUserBody) {
  const formData = new FormData();
  formData.append('name', body.name);
  formData.append('secondName', body.secondName);
  formData.append('email', body.email);

  if (body.imagePath) {
    formData.append('imagePath', body.imagePath, body.imagePath.name);
  }

  const { data } = await httpClient.put(`/users/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
}
