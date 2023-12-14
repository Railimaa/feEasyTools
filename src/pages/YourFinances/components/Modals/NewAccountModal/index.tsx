import { Controller } from 'react-hook-form';

import { Button } from '../../../../../components/Button';
import { ColorsDropdownInput } from '../../../../../components/ColorsDropdownInput';
import { Input } from '../../../../../components/Input';
import { InputCurrency } from '../../../../../components/InputCurrency';
import { Modal } from '../../../../../components/Modal';
import { Select } from '../../../../../components/Select';

import { Container, Form } from './style';
import { useNewAccountModal } from './useNewAccountModal';

const options = [
  {
    value: 'CHECKING',
    label: 'Conta Corrente',
  },
  {
    value: 'INVESTMENT',
    label: 'Investimento',
  },
  {
    value: 'CASH',
    label: 'Dinheiro Fisíco',
  },
];

export function NewAccountModal() {
  const {
    openNewAccountModal,
    handleCloseNewAccountModal,
    handleSubmit,
    isLoading,
    errors,
    register,
    control,
  } = useNewAccountModal();

  return (
    <Container>
      <Modal
        title="Nova Conta"
        open={openNewAccountModal}
        onClose={handleCloseNewAccountModal}
      >
        <Form onSubmit={handleSubmit}>
          <span id="saldoInicial">Saldo inicial</span>
          <div className="valueAccount">
            <span id="RS">R$</span>

            <Controller
              control={control}
              name="initialBalance"
              defaultValue="0"
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.initialBalance?.message}
                  onchange={onChange}
                  value={value}
                />
              )}
            />
          </div>

          <div className="inputs">
            <Input
              label="Nome da conta"
              error={errors.name?.message}
              {...register('name')}
            />

            <Controller
              control={control}
              name="type"
              defaultValue="CHECKING"
              render={({ field: { onChange, value } }) => (
                <Select
                  options={options}
                  onChange={onChange}
                  value={value}
                  error={errors.type?.message}
                  label="Tipo"
                />
              )}
            />

            <Controller
              control={control}
              name="color"
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <ColorsDropdownInput
                  error={errors.color?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>

          <Button isLoading={isLoading}>Criar</Button>
        </Form>
      </Modal>
    </Container>
  );
}
