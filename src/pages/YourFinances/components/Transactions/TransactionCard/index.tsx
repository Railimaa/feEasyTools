import { CategoryIcon } from '../../../../../assets/Icons/categories/CategoryIcon';
import { ITransactions } from '../../../../../types/Transaction';
import { FormatCurrency } from '../../../../../utils/formatCurrency';
import { FormatDate } from '../../../../../utils/formatDate';

import { Container } from './style';

interface ITransactionCardProps {
  transaction: ITransactions;
  valuesVisible: boolean;
}

export function TransactionCard({
  transaction,
  valuesVisible,
}: ITransactionCardProps) {
  return (
    <Container>
      <div className="nameAndDate">
        <CategoryIcon
          type={transaction.type === 'EXPENSE' ? 'expense' : 'income'}
          category={transaction.category.icon}
        />

        <div className="block">
          <strong>{transaction.name}</strong>
          <small>{FormatDate(new Date(transaction.date))}</small>
        </div>
      </div>

      {transaction.type === 'EXPENSE' && (
        <span
          id="EXPENSE"
          style={{ filter: valuesVisible ? 'blur(8px)' : 'none' }}
        >
          - {FormatCurrency(transaction.value)}
        </span>
      )}

      {transaction.type === 'INCOME' && (
        <span
          id="INCOME"
          style={{ filter: valuesVisible ? 'blur(8px)' : 'none' }}
        >
          + {FormatCurrency(transaction.value)}
        </span>
      )}
    </Container>
  );
}
