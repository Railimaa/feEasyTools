import { ChevronDownIcon } from '@radix-ui/react-icons';

import { ExpenseIcon } from '../../../../../assets/Icons/ExpenseIcon';
import { IncomeIcon } from '../../../../../assets/Icons/IncomeIcon';
import { TransactionsIcon } from '../../../../../assets/Icons/TransactionsIcon';
import { DropdownMenu } from '../../../../../components/DropdownMenu';

import { Container } from './style';

interface ITransactionTypeDropdownMenuProps {
  onSelect: (type: 'INCOME' | 'EXPENSE' | undefined) => void;
  selectType: 'INCOME' | 'EXPENSE' | undefined;
}

export function TransactionTypeDropdownMenu({
  onSelect,
  selectType,
}: ITransactionTypeDropdownMenuProps) {
  return (
    <DropdownMenu.Root>
      <Container>
        <DropdownMenu.Trigger>
          {selectType === 'INCOME' && <IncomeIcon />}
          {selectType === 'EXPENSE' && <ExpenseIcon />}
          {selectType === undefined && <TransactionsIcon />}

          <span>
            {selectType === 'INCOME' && 'Receitas'}
            {selectType === 'EXPENSE' && 'Despesas'}
            {selectType === undefined && 'Transações'}
          </span>

          <ChevronDownIcon width={24} height={24} color="#fff" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content style={{ width: '279px' }}>
          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => onSelect('INCOME')}
          >
            <IncomeIcon />
            Receitas
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => onSelect('EXPENSE')}
          >
            <ExpenseIcon />
            Despesas
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => onSelect(undefined)}
          >
            <TransactionsIcon color="#fff" />
            Transações
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </Container>
    </DropdownMenu.Root>
  );
}
