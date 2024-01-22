import { Controller } from 'react-hook-form';

import { Trash } from '../../../../../assets/Icons/Trash';
import { Button } from '../../../../../components/Button';
import { ConfirmDeleteModal } from '../../../../../components/ConfirmDeleteModal';
import { DatePickerInput } from '../../../../../components/DatePickerInput';
import { Input } from '../../../../../components/Input';
import { InputCurrency } from '../../../../../components/InputCurrency';
import { Modal } from '../../../../../components/Modal';
import { Select } from '../../../../../components/Select';
import { ITransactions } from '../../../../../types/Transaction';

import { Form } from './style';
import { useEditTransactionModal } from './useEditTransactionModal';

interface IEditTransactionModalProps {
  open: boolean;
  handleCloseModal: () => void;
  transaction: ITransactions;
}

export function EditTransactionModal({
  open,
  handleCloseModal,
  transaction,
}: IEditTransactionModalProps) {
  const {
    accounts,
    categories,
    handleSubmit,
    register,
    errors,
    control,
    isLoading,
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteTransaction,
    theme,
  } = useEditTransactionModal(transaction, handleCloseModal);

  const isExpense = transaction.type === 'EXPENSE';

  if (openDeleteModal) {
    return (
      <ConfirmDeleteModal
        title={isExpense ? 'despesa' : 'receita'}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteTransaction}
        isLoading={isLoading}
      />
    );
  }

  return (
    <Modal
      open={open}
      title={isExpense ? 'Editar despesa' : 'Editar receita'}
      onClose={handleCloseModal}
      rightAction={
        <button type="button" onClick={handleOpenDeleteModal}>
          <Trash />
        </button>
      }
    >
      <Form onSubmit={handleSubmit} theme={theme}>
        <span id="saldoInicial">
          {isExpense ? 'Valor da despesa' : 'Valor da receita'}
        </span>

        <div className="valueTransaction">
          <span id="RS">R$</span>

          <Controller
            control={control}
            name="value"
            defaultValue="0"
            render={({ field: { onChange, value } }) => (
              <InputCurrency
                onchange={onChange}
                value={value}
                error={errors.value?.message}
              />
            )}
          />
        </div>

        <div className="inputs">
          <Input
            label={isExpense ? 'Nome da despesa' : 'Nome da receita'}
            error={errors.name?.message}
            {...register('name')}
          />

          <Controller
            control={control}
            name="categoryId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                label="Categoria"
                options={categories.map((category) => ({
                  label: category.name,
                  value: category.id,
                }))}
                onChange={onChange}
                value={value}
                error={errors.categoryId?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="bankAccountId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                label={isExpense ? 'Pagar com' : 'Receber com'}
                options={accounts.map((account) => ({
                  label: account.name,
                  value: account.id,
                }))}
                onChange={onChange}
                value={value}
                error={errors.bankAccountId?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field: { onChange, value } }) => (
              <DatePickerInput
                onChange={onChange}
                value={value}
                error={errors.date?.message}
              />
            )}
          />
        </div>

        <Button isLoading={isLoading}>Salvar</Button>
      </Form>
    </Modal>
  );
}
