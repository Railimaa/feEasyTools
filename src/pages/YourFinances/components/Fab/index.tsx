import { MagicWandIcon, PlusIcon } from '@radix-ui/react-icons';

import { BankAccountIcon } from '../../../../assets/Icons/BankAccountIcon';
import { CategoryIcon } from '../../../../assets/Icons/categories/CategoryIcon';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

import { Container } from './style';

export function Fab() {
  const {
    handleOpenNewAccountModal,
    handleOpenNewTransactionModal,
    handleOpenNewCategoryModal,
  } = useYourFinancesContext();

  return (
    <Container>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <PlusIcon width={24} height={24} color="#fff" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content side="top">
          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => handleOpenNewTransactionModal('INCOME')}
          >
            <CategoryIcon type="income" />
            Nova Receita
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => handleOpenNewTransactionModal('EXPENSE')}
          >
            <CategoryIcon type="expense" />
            Nova Despesa
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={handleOpenNewAccountModal}
          >
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '30px' }}
            onSelect={handleOpenNewCategoryModal}
          >
            <MagicWandIcon width={24} height={24} color="#6741d9" />
            Nova Categoria
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Container>
  );
}
