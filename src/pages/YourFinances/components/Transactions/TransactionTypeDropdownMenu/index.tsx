import { ChevronDownIcon } from '@radix-ui/react-icons';

import { ExpenseIcon } from '../../../../../assets/Icons/ExpenseIcon';
import { IncomeIcon } from '../../../../../assets/Icons/IncomeIcon';
import { TransactionsIcon } from '../../../../../assets/Icons/TransactionsIcon';
import { DropdownMenu } from '../../../../../components/DropdownMenu';
import { useTheme } from '../../../../../contexts/useTheme';

import { Container } from './style';

interface ITransactionTypeDropdownMenuProps {
  onSelect: (type: 'INCOME' | 'EXPENSE' | undefined) => void;
  selectType: 'INCOME' | 'EXPENSE' | undefined;
}

export function TransactionTypeDropdownMenu({
  onSelect,
  selectType,
}: ITransactionTypeDropdownMenuProps) {
  const { theme } = useTheme();

  return (
    <DropdownMenu.Root>
      <Container theme={theme}>
        <DropdownMenu.Trigger>
          {selectType === 'INCOME' && (
            <IncomeIcon color={theme === 'dark' ? '#fff' : '#000'} />
          )}
          {selectType === 'EXPENSE' && (
            <ExpenseIcon color={theme === 'dark' ? '#fff' : '#000'} />
          )}
          {selectType === undefined && (
            <TransactionsIcon color={theme === 'dark' ? '#fff' : '#000'} />
          )}

          <span>
            {selectType === 'INCOME' && 'Receitas'}
            {selectType === 'EXPENSE' && 'Despesas'}
            {selectType === undefined && 'Transações'}
          </span>

          <ChevronDownIcon
            width={24}
            height={24}
            color={theme === 'dark' ? '#fff' : '#000'}
          />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content style={{ width: '279px' }}>
          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => onSelect('INCOME')}
          >
            <IncomeIcon color={theme === 'dark' ? '#fff' : '#000'} />
            Receitas
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => onSelect('EXPENSE')}
          >
            <ExpenseIcon color={theme === 'dark' ? '#fff' : '#000'} />
            Despesas
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => onSelect(undefined)}
          >
            <TransactionsIcon color={theme === 'dark' ? '#fff' : '#000'} />
            Transações
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </Container>
    </DropdownMenu.Root>
  );
}
