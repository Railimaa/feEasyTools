import { Header } from '../../components/Header';

import { Accounts } from './components/Accounts';
import { Transactions } from './components/Transactions';
import { Container } from './style';

export function YourFinances() {
  return (
    <>
      <Header />

      <Container>
        <div className="main">
          <div className="left">
            <Accounts />
          </div>

          <div className="right">
            <Transactions />
          </div>
        </div>
      </Container>
    </>
  );
}
