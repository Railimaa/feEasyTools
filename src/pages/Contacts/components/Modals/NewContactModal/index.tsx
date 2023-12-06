import { Controller } from 'react-hook-form';

import { Button } from '../../../../../components/Button';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';
import { Select } from '../../../../../components/Select';

import { Form } from './style';
import { useNewContactModal } from './useNewContactModal';

const options = [
  { label: 'Instagram', value: 'insta' },
  { label: 'Whatsaap', value: 'wpp' },
  { label: 'Facebook', value: 'face' },
];

export function NewContactModal() {
  const {
    openNewContactModal,
    handleCloseNewContactModal,
    handleSubmit,
    isLoading,
    register,
    errors,
    control,
  } = useNewContactModal();

  return (
    <Modal
      open={openNewContactModal}
      onClose={handleCloseNewContactModal}
      title="Novo contato"
    >
      <Form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          label="Email"
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Telefone"
          error={errors.phone?.message}
          {...register('phone')}
          maxLength={15}
        />

        <Controller
          control={control}
          name="categoryId"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Select
              options={options}
              label="Categoria"
              error={errors.categoryId?.message}
              onChange={onChange}
              value={value}
            />
          )}
        />

        <Button isLoading={isLoading}>Cadastrar</Button>
      </Form>
    </Modal>
  );
}
