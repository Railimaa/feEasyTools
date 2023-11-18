export interface ITransactions {
  id: string;
  name: string;
  value: number;
  bankAccountId: string;
  categoryId: string;
  date: string;
  type: 'INCOME' | 'EXPENSE';
  category: {
    id: string;
    name: string;
    icon: string;
  };
}
