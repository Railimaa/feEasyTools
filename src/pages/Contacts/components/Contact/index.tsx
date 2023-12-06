import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { Spinner } from '../../../../components/Spinner';

import { Card } from './components/Card';
import { EmptyList } from './components/EmptyList';
import { Header } from './components/Header';
import { Container, InputSearch } from './style';
import { useContact } from './useContact';

export function Contact() {
  const { orderBy, handleOrderBy, isLoading, contacts } = useContact();

  const hasContacts = contacts.length > 0;

  return (
    <Container>
      {isLoading && (
        <div className="isLoading">
          <Spinner />
        </div>
      )}

      {!isLoading && !hasContacts && <EmptyList />}

      {!isLoading && hasContacts && (
        <>
          <div className="inputSearch">
            <InputSearch type="text" placeholder="Pesquisar contato..." />

            <div className="icon">
              <MagnifyingGlassIcon />
            </div>
          </div>

          <Header orderBy={orderBy} handleOrderBy={handleOrderBy} />

          <div className="content">
            {contacts.map((contact) => (
              <Card key={contact.id} contact={contact} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
}
