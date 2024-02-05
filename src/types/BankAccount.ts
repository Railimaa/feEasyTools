export interface IBankAccount {
  id: string;
  name: string;
  initialBalance: number;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
  currentBalance: number;
  categoryBankAccount: {
    id: string;
    icon: string;
    color: string;
  };
}
