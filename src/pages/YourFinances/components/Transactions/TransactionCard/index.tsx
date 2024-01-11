import { CategoryIcon } from '../../../../../assets/Icons/categories/CategoryIcon';
import { useTheme } from '../../../../../contexts/useTheme';
import { ITransactions } from '../../../../../types/Transaction';
import { FormatCurrency } from '../../../../../utils/formatCurrency';
import { FormatDate } from '../../../../../utils/formatDate';

import { Container } from './style';

interface ITransactionCardProps {
  transaction: ITransactions;
  valuesVisible: boolean;
  handleOpenEditModal: (transaction: ITransactions) => void;
}

export function TransactionCard({
  transaction,
  valuesVisible,
  handleOpenEditModal,
}: ITransactionCardProps) {
  const { theme } = useTheme();

  return (
    <Container
      onClick={() => handleOpenEditModal(transaction)}
      theme={theme}
      $valuesVisible={valuesVisible}
      role="button"
    >
      <div className="nameAndDate">
        <CategoryIcon
          type={transaction.type === 'EXPENSE' ? 'expense' : 'income'}
          category={transaction.categoryTransaction?.icon}
        />

        <div className="block">
          <strong>{transaction.name}</strong>
          <small>{FormatDate(new Date(transaction.date))}</small>
        </div>
      </div>

      {transaction.type === 'EXPENSE' && (
        <span id="EXPENSE">- {FormatCurrency(transaction.value)}</span>
      )}

      {transaction.type === 'INCOME' && (
        <span id="INCOME">+ {FormatCurrency(transaction.value)}</span>
      )}
    </Container>
  );
}
