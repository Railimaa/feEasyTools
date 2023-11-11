import { Header } from '../../components/Header';

import { Accounts } from './components/Accounts';
import { Fab } from './components/Fab';
import { Transactions } from './components/Transactions';
import { YourFinancesProvider } from './components/YourFinancesContext';
import { NewAccountModal } from './Modals/NewAccountModal';
import { Container } from './style';

export function YourFinances() {
  return (
    <YourFinancesProvider>
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

        <Fab />
        <NewAccountModal />
      </Container>
    </YourFinancesProvider>
  );
}
