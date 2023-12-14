import { Controller } from 'react-hook-form';

import { Button } from '../../../../../components/Button';
import { DatePickerInput } from '../../../../../components/DatePickerInput';
import { Input } from '../../../../../components/Input';
import { InputCurrency } from '../../../../../components/InputCurrency';
import { Modal } from '../../../../../components/Modal';
import { Select } from '../../../../../components/Select';

import { Container, Form } from './style';
import { useNewTransactionModal } from './useNewTransactionModal';

export function NewTransactionModal() {
  const {
    openNewTransactionModal,
    handleCloseNewTransactionModal,
    newTransactionType,
    categories,
    accounts,
    handleSubmit,
    register,
    control,
    errors,
    isLoading,
  } = useNewTransactionModal();

  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={openNewTransactionModal}
      onClose={handleCloseNewTransactionModal}
    >
      <Container>
        <Form onSubmit={handleSubmit}>
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
              type="text"
              {...register('name')}
              error={errors.name?.message}
            />

            <Controller
              control={control}
              name="categoryId"
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <Select
                  options={categories.map((category) => ({
                    value: category.id,
                    label: category.name,
                  }))}
                  label="Categoria"
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
                  options={accounts.map((account) => ({
                    value: account.id,
                    label: account.name,
                  }))}
                  label={isExpense ? 'Pagar com' : 'Receber com'}
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

          <Button isLoading={isLoading}>Criar</Button>
        </Form>
      </Container>
    </Modal>
  );
}
