import { Header } from '../../components/Header';

import { Accounts } from './components/Accounts';
import { CategoriesExpense } from './components/CategoriesExpense';
import { CategoriesIncome } from './components/CategoriesIncome';
import { Fab } from './components/Fab';
import { Transactions } from './components/Transactions';
import {
  YourFinancesContext,
  YourFinancesProvider,
} from './components/YourFinancesContext';
import { EditAccountModal } from './Modals/EditAccountModal';
import { EditCategoryModal } from './Modals/EditCategoryModal';
import { NewAccountModal } from './Modals/NewAccountModal';
import { NewCategoryModal } from './Modals/NewCategoryModal';
import { NewTransactionModal } from './Modals/NewTransactionModal';
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
