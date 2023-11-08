import { BankAccountTypeIcon } from '../../../../../assets/Icons/BankAccountTypeIcon';
import { FormatCurrency } from '../../../../../utils/formatCurrency';

import { Container } from './style';

interface IAccountCardProps {
  name: string;
  color: string;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT';
  currentBalance: number;
}

export function AccountCard({
  name,
  color,
  type,
  currentBalance,
}: IAccountCardProps) {
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
