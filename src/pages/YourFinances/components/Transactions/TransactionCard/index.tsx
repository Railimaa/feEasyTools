import { CategoryIcon } from '../../../../../assets/Icons/categories/CategoryIcon';
import { FormatCurrency } from '../../../../../utils/formatCurrency';

import { Container } from './style';

interface ITransactionCardProps {
  valuesVisible: boolean;
}

export function TransactionCard({ valuesVisible }: ITransactionCardProps) {
  return (
    <Container>
      <div className="nameAndDate">
        <CategoryIcon type="income" category="" />

        <div className="block">
          <strong>Salário</strong>
          <small>04/06/2023</small>
        </div>
      </div>

      <span
        id="INCOME"
        style={{ filter: valuesVisible ? 'blur(8px)' : 'none' }}
      >
        + {FormatCurrency(123)}
      </span>
    </Container>
  );
}
