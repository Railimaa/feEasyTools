import { BankAccountTypeIcon } from '../../../../../assets/Icons/BankAccountTypeIcon';
import { useTheme } from '../../../../../contexts/useTheme';
import { IBankAccount } from '../../../../../types/BankAccount';
import { FormatCurrency } from '../../../../../utils/formatCurrency';
import { useYourFinancesContext } from '../../YourFinancesContext/useYourFinancesContext';

import { Container } from './style';

interface IAccountCardProps {
  account: IBankAccount;
  valuesVisible: boolean;
}

export function AccountCard({ account, valuesVisible }: IAccountCardProps) {
  const { color, name, type, currentBalance } = account;
  const { handleOpenEditAccountModal } = useYourFinancesContext();
  const { theme } = useTheme();

  return (
    <Container
      color={color}
      theme={theme}
      role="button"
      onClick={() => handleOpenEditAccountModal(account)}
    >
      <div className="content">
        <BankAccountTypeIcon type={type} />
        <span>{name}</span>
      </div>

      <div className="saldo">
        <span style={{ filter: valuesVisible ? 'blur(8px)' : 'none' }}>
          {FormatCurrency(currentBalance)}
        </span>

        <small>Saldo atual</small>
      </div>
    </Container>
  );
}
