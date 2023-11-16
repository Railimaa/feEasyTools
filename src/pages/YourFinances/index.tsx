import { Header } from '../../components/Header';

import { Accounts } from './components/Accounts';
import { Fab } from './components/Fab';
import { Transactions } from './components/Transactions';
import {
  YourFinancesContext,
  YourFinancesProvider,
} from './components/YourFinancesContext';
import { EditAccountModal } from './Modals/EditAccountModal';
import { NewAccountModal } from './Modals/NewAccountModal';
import { NewTransactionModal } from './Modals/NewTransactionModa';
import { Container } from './style';

export function YourFinances() {
  return (
    <YourFinancesProvider>
      <YourFinancesContext.Consumer>
        {({ accountIsBeingEdited }) => (
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

              <Fab />
              <NewAccountModal />
              {accountIsBeingEdited && <EditAccountModal />}
              <NewTransactionModal />
            </Container>
          </>
        )}
      </YourFinancesContext.Consumer>
    </YourFinancesProvider>
  );
}
