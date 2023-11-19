export interface ITransactions {
  id: string;
  name: string;
  value: number;
  bankAccountId: string;
  categoryId: string;
  date: string;
  type: 'INCOME' | 'EXPENSE';
  categoryTransaction: {
    id: string;
    name: string;
    icon: string;
  };
}
