import { Header } from '../../components/Header';

import { Categories } from './components/Categories';
import { Contact } from './components/Contact';
import { ContactProvider } from './components/ContactContext';
import { Fab } from './components/Fab';
import { NewContactModal } from './components/Modals/NewContactModal';
import { Container } from './style';

export function Contacts() {
  return (
    <ContactProvider>
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
      </Container>
    </ContactProvider>
  );
}
