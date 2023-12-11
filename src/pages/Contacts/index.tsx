import { Header } from '../../components/Header';

import { Categories } from './components/Categories';
import { Contact } from './components/Contact';
import { ContactContext, ContactProvider } from './components/ContactContext';
import { Fab } from './components/Fab';
import { EditCategoryModal } from './components/Modals/EditCategoryModal';
import { EditContactModal } from './components/Modals/EditdContactModal';
import { NewCategoryModal } from './components/Modals/NewCategoryModal';
import { NewContactModal } from './components/Modals/NewContactModal';
import { Container } from './style';

export function Contacts() {
  return (
    <ContactProvider>
      <ContactContext.Consumer>
        {({ contactIsBeingEdited, categoryBeingEdited }) => (
          <>
            <Header />

            <Container>
              <div className="title">
                <h1>YourContacts</h1>
              </div>

              <div className="main">
                <div className="left">
                  <Contact />
                </div>

                <div className="right">
                  <Categories />
                </div>
              </div>

              <Fab />
              <NewContactModal />
              {contactIsBeingEdited && <EditContactModal />}
              <NewCategoryModal />
              {categoryBeingEdited && <EditCategoryModal />}
            </Container>
          </>
        )}
      </ContactContext.Consumer>
    </ContactProvider>
  );
}
