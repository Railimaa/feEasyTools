export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  categoryId: string;
  categoryContact: {
    name: string;
    id: string;
    icon: string;
  };
}
