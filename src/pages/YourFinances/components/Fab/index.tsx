import { PlusIcon } from '@radix-ui/react-icons';

import { BankAccountIcon } from '../../../../assets/Icons/BankAccountIcon';
import { CategoryIcon } from '../../../../assets/Icons/categories/CategoryIcon';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

import { Container } from './style';

export function Fab() {
  const { handleOpenNewAccountModal } = useYourFinancesContext();

  return (
    <Container>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <PlusIcon width={24} height={24} color="#fff" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content side="top">
          <DropdownMenu.Item colorHover="#E5DBFF" style={{ gap: '8px' }}>
            <CategoryIcon type="income" />
            Nova Receita
          </DropdownMenu.Item>

          <DropdownMenu.Item colorHover="#E5DBFF" style={{ gap: '8px' }}>
            <CategoryIcon type="expense" />
            Nova Despesa
          </DropdownMenu.Item>

          <DropdownMenu.Item
            colorHover="#E5DBFF"
            style={{ gap: '8px' }}
            onSelect={handleOpenNewAccountModal}
          >
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Container>
  );
}
