/* eslint-disable react/require-default-props */
import { ArrowUpIcon } from '@radix-ui/react-icons';

import { FilterIcon } from '../../../../../assets/Icons/FIlterIcon';

import { Container } from './style';

interface IHeaderProps {
  orderBy?: string;
  handleOrderBy: () => void;
  qtyOfContacts: number;
  handleOpenFilterModal: () => void;
}

export function Header({
  orderBy,
  handleOrderBy,
  qtyOfContacts,
  handleOpenFilterModal,
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

      <button type="button" onClick={handleOpenFilterModal}>
        <FilterIcon />
      </button>
    </Container>
  );
}
