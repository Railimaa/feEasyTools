/* eslint-disable react/require-default-props */
import { ArrowUpIcon } from '@radix-ui/react-icons';

import { Container } from './style';

interface IHeaderProps {
  orderBy?: string;
  handleOrderBy: () => void;
  qtyOfContacts: number;
}

export function Header({
  orderBy,
  handleOrderBy,
  qtyOfContacts,
}: IHeaderProps) {
  return (
    <Container $orderBy={orderBy}>
      <strong>
        {qtyOfContacts}{' '}
        {qtyOfContacts === 1 || qtyOfContacts === 0 ? 'contato' : 'contatos'}
      </strong>

      <div className="orderName">
        <button type="button" onClick={handleOrderBy}>
          <span>Nome</span>

          <span id="arrow">
            <ArrowUpIcon width={18} height={18} color="#fff" />
          </span>
        </button>
      </div>
    </Container>
  );
}
