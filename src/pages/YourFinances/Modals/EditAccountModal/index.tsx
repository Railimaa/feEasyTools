import { Controller } from 'react-hook-form';

import { Button } from '../../../../components/Button';
import { ColorsDropdownInput } from '../../../../components/ColorsDropdownInput';
import { Input } from '../../../../components/Input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';

import { Container, Form } from './style';
import { useEditAccountModal } from './useEditAccountModal';

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

export function EditAccountModal() {
  const {
    openEditAccountModal,
    handleCloseEditAccountModal,
    isLoading,
    control,
    errors,
    register,
    handleSubmit,
  } = useEditAccountModal();

  return (
    <Container>
      <Modal
        open={openEditAccountModal}
        onClose={handleCloseEditAccountModal}
        title="Editar Conta"
      >
        <Form onSubmit={handleSubmit}>
          <span id="saldoInicial">Saldo inicial</span>
          <div className="valueAccount">
            <span id="RS">R$</span>

            <Controller
              control={control}
              name="initialBalance"
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
              placeholder="Nome da conta"
              error={errors.name?.message}
              {...register('name')}
            />

            <Controller
              control={control}
              name="type"
              render={({ field: { onChange, value } }) => (
                <Select
                  options={options}
                  error={errors.type?.message}
                  onChange={onChange}
                  value={value}
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

          <Button isLoading={isLoading}>Salvar</Button>
        </Form>
      </Modal>
    </Container>
  );
}
