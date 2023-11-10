export interface IBankAccount {
  id: string;
  name: string;
  initialBalance: string;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
  currentBalance: number;
}
