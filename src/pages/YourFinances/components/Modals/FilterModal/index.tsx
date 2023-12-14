import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { Button } from '../../../../../components/Button';
import { Modal } from '../../../../../components/Modal';

import { ContainerAccounts, ContainerYears } from './style';
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
      <ContainerAccounts>
        <span>Conta</span>

        <div className="actions">
          {accounts.map((account) => (
            <button
              key={account.id}
              type="button"
              onClick={() => handleSelectBankAccount(account.id)}
              className={selectBankAccount === account.id ? 'btn-active' : ''}
            >
              {account.name}
            </button>
          ))}
        </div>
      </ContainerAccounts>

      <ContainerYears>
        <span>Ano</span>

        <div className="actions">
          <button type="button" onClick={() => handleChangeYear(-1)}>
            <ChevronLeftIcon width={48} height={18} color="#fff" />
          </button>

          <small>{selectYear}</small>

          <button type="button" onClick={() => handleChangeYear(+1)}>
            <ChevronRightIcon width={48} height={18} color="#fff" />
          </button>
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
      </ContainerYears>
    </Modal>
  );
}
