import { BankAccountTypeIcon } from '../../../../../assets/Icons/BankAccountTypeIcon';
import { IBankAccount } from '../../../../../types/BankAccount';
import { FormatCurrency } from '../../../../../utils/formatCurrency';

import { Container } from './style';

interface IAccountCardProps {
  account: IBankAccount;
}

export function AccountCard({ account }: IAccountCardProps) {
  const { color, name, type, currentBalance } = account;
  return (
    <Container color={color}>
      <div className="content">
        <BankAccountTypeIcon type={type} />
        <span>{name}</span>
      </div>

      <div className="saldo">
        <span>{FormatCurrency(currentBalance)}</span>

        <small>Saldo atual</small>
      </div>
    </Container>
  );
}
