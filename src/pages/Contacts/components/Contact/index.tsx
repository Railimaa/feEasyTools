import { Spinner } from '../../../../components/Spinner';
import { FilterContactModal } from '../Modals/FilterContactModal';

import Card from './Card';
import { EmptyList } from './EmptyList';
import { Header } from './Header';
import { SearchInput } from './SearchInput';
import { SearchNotFound } from './SearchNotFound';
import { Container } from './style';
import { useContact } from './useContact';

export function Contact() {
  const {
    filters,
    handleOrderBy,
    isLoading,
    contacts,
    handleOpenEditedContactModal,
    searchTerm,
    handleChangeSearchTerm,
    filteredContacts,
    isInitialLoading,
    openFilterModal,
    handleOpenFilterModal,
    handleCloseFilterModal,
    handleCategoryFilter,
  } = useContact();

  const hasContacts = contacts.length > 0;
  const isSearchEmpty = contacts.length > 0 && filteredContacts.length < 1;

  return (
    <Container>
      {isInitialLoading && (
        <div className="isInitialLoading">
          <Spinner width="36" height="36" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <FilterContactModal
            open={openFilterModal}
            handleCloseFilterModal={handleCloseFilterModal}
            handleCategoryFilter={handleCategoryFilter}
          />

          <SearchInput
            value={searchTerm}
            onChange={handleChangeSearchTerm}
            placeholder="Pesquisar contato..."
            qtyOfContacts={contacts.length}
          />

          <Header
            orderBy={filters.orderBy}
            handleOrderBy={handleOrderBy}
            qtyOfContacts={filteredContacts.length}
            handleOpenFilterModal={handleOpenFilterModal}
          />

          {!isLoading && !hasContacts && <EmptyList />}

          {isSearchEmpty && <SearchNotFound searchValue={searchTerm} />}

          <div className="content">
            {isLoading && (
              <div className="isLoading">
                <Spinner />
              </div>
            )}

            {!isLoading && (
              <Card
                filteredContact={filteredContacts}
                handleOpenEditedContactModal={handleOpenEditedContactModal}
              />
            )}
          </div>
        </>
      )}
    </Container>
  );
}
