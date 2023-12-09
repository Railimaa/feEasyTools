import { Spinner } from '../../../../components/Spinner';

import Card from './components/Card';
import { EmptyList } from './components/EmptyList';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput';
import { SearchNotFound } from './components/SearchNotFound';
import { Container } from './style';
import { useContact } from './useContact';

export function Contact() {
  const {
    orderBy,
    handleOrderBy,
    isLoading,
    contacts,
    handleOpenEditedContactModal,
    searchTerm,
    handleChangeSearchTerm,
    filteredContacts,
  } = useContact();

  const hasContacts = contacts.length > 0;
  const isSearchEmpty = contacts.length > 0 && filteredContacts.length < 1;

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
          <SearchInput
            value={searchTerm}
            onChange={handleChangeSearchTerm}
            placeholder="Pesquisar contato..."
          />

          <Header
            orderBy={orderBy}
            handleOrderBy={handleOrderBy}
            qtyOfContacts={filteredContacts.length}
          />

          {isSearchEmpty && <SearchNotFound searchValue={searchTerm} />}

          <div className="content">
            <Card
              filteredContact={filteredContacts}
              handleOpenEditedContactModal={handleOpenEditedContactModal}
            />
          </div>
        </>
      )}
    </Container>
  );
}
