import { ChevronDownIcon } from '@radix-ui/react-icons';

import { ExpenseIcon } from '../../../../../assets/Icons/ExpenseIcon';
import { IncomeIcon } from '../../../../../assets/Icons/IncomeIcon';
import { TransactionsIcon } from '../../../../../assets/Icons/TransactionsIcon';
import { DropdownMenu } from '../../../../../components/DropdownMenu';

import { Container } from './style';

export function TransactionTypeDropdownMenu() {
  return (
    <DropdownMenu.Root>
      <Container>
        <DropdownMenu.Trigger>
          <TransactionsIcon />

          <span>Transações</span>

          <ChevronDownIcon width={24} height={24} color="#fff" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content style={{ width: '279px' }}>
          <DropdownMenu.Item style={{ gap: '8px' }} colorHover="#E5DBFF">
            <IncomeIcon />
            Receitas
          </DropdownMenu.Item>

          <DropdownMenu.Item style={{ gap: '8px' }} colorHover="#E5DBFF">
            <ExpenseIcon />
            Despesas
          </DropdownMenu.Item>

          <DropdownMenu.Item style={{ gap: '8px' }} colorHover="#E5DBFF">
            <TransactionsIcon color="#212529" />
            Transações
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </Container>
    </DropdownMenu.Root>
  );
}
