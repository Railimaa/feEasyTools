import { Header } from '../../components/Header';

import { Accounts } from './components/Accounts';
import { CategoriesExpense } from './components/CategoriesExpense';
import { CategoriesIncome } from './components/CategoriesIncome';
import { Fab } from './components/Fab';
import { EditAccountModal } from './components/Modals/EditAccountModal';
import { EditCategoryModal } from './components/Modals/EditCategoryModal';
import { NewAccountModal } from './components/Modals/NewAccountModal';
import { NewCategoryModal } from './components/Modals/NewCategoryModal';
import { NewTransactionModal } from './components/Modals/NewTransactionModal';
import { Transactions } from './components/Transactions';
import {
  YourFinancesContext,
  YourFinancesProvider,
} from './components/YourFinancesContext';
import { Container } from './style';

export function YourFinances() {
  return (
    <YourFinancesProvider>
      <YourFinancesContext.Consumer>
        {({ accountIsBeingEdited, categoryIsBeingEdited }) => (
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

              <div className="title">
                <h2>Categorias</h2>
              </div>

              <div className="categories">
                <div className="income">
                  <CategoriesIncome />
                </div>

                <div className="expense">
                  <CategoriesExpense />
                </div>
              </div>

              <Fab />
              <NewAccountModal />
              {accountIsBeingEdited && <EditAccountModal />}
              <NewTransactionModal />
              <NewCategoryModal />
              {categoryIsBeingEdited && <EditCategoryModal />}
            </Container>
          </>
        )}
      </YourFinancesContext.Consumer>
    </YourFinancesProvider>
  );
}
