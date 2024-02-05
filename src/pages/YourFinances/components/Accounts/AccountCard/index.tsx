import { BankAccountTypeIcon } from '../../../../../assets/Icons/BankAccountTypeIcon';
import { IconsBank } from '../../../../../components/BankAccountIconsDropdownInput/IconsBank';
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
  const { name, type, currentBalance, categoryBankAccount } = account;
  const { handleOpenEditAccountModal } = useYourFinancesContext();
  const { theme } = useTheme();

  return (
    <Container
      color={categoryBankAccount.color}
      theme={theme}
      role="button"
      onClick={() => handleOpenEditAccountModal(account)}
    >
      <BankAccountTypeIcon type={type} />

      <span id="name">{name}</span>

      <div className="saldo">
        <span style={{ filter: valuesVisible ? 'blur(8px)' : 'none' }}>
          {FormatCurrency(currentBalance)}
        </span>

        <small>Saldo atual</small>
      </div>

      <div className="img">
        <IconsBank iconName={categoryBankAccount.icon} />
      </div>
    </Container>
  );
}
