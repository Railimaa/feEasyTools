import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { BankAccountTypeIcon } from '../../../../../assets/Icons/BankAccountTypeIcon';
import { Button } from '../../../../../components/Button';
import { Modal } from '../../../../../components/Modal';

import { Container } from './style';
import { useFilterModal } from './useFilterModal';

interface IFilterModalProps {
  open: boolean;
  handleCloseFilterModal: () => void;
  onApplyFilters: (filters: {
    bankAccountId: string | undefined;
    year: number;
  }) => void;
}

export function FilterModal({
  open,
  handleCloseFilterModal,
  onApplyFilters,
}: IFilterModalProps) {
  const {
    accounts,
    selectYear,
    handleChangeYear,
    selectBankAccount,
    handleSelectBankAccount,
  } = useFilterModal();

  return (
    <Modal open={open} onClose={handleCloseFilterModal} title="Filtros">
      <Container>
        <span>Conta</span>

        <div className="accounts">
          {accounts.map((account) => (
            <button
              key={account.id}
              type="button"
              onClick={() => handleSelectBankAccount(account.id)}
              className={selectBankAccount === account.id ? 'btn-active' : ''}
            >
              {account.name}
              <BankAccountTypeIcon type={account.type} />
            </button>
          ))}
        </div>

        <div className="year">
          <span>Ano</span>

          <div className="action">
            <button type="button" onClick={() => handleChangeYear(-1)}>
              <ChevronLeftIcon width={48} height={18} color="#fff" />
            </button>

            <small>{selectYear}</small>

            <button type="button" onClick={() => handleChangeYear(+1)}>
              <ChevronRightIcon width={48} height={18} color="#fff" />
            </button>
          </div>
        </div>

        <Button
          onClick={() =>
            onApplyFilters({
              bankAccountId: selectBankAccount,
              year: selectYear,
            })
          }
        >
          Aplicar filtros
        </Button>
      </Container>
    </Modal>
  );
}
