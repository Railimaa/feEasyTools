/* eslint-disable react/require-default-props */
import { ArrowUpIcon } from '@radix-ui/react-icons';

import { Container } from './style';

interface IHeaderProps {
  orderBy?: string;
  handleOrderBy: () => void;
}

export function Header({ orderBy, handleOrderBy }: IHeaderProps) {
  return (
    <Container $orderBy={orderBy}>
      <strong>{3} contatos</strong>

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
