import { Controller } from 'react-hook-form';

import { Button } from '../../../../../components/Button';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';
import { Select } from '../../../../../components/Select';

import { Form } from './style';
import { useNewContactModal } from './useNewContactModal';

export function NewContactModal() {
  const {
    openNewContactModal,
    handleCloseNewContactModal,
    handleSubmit,
    isLoading,
    register,
    errors,
    control,
    categoriesContact,
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
              options={categoriesContact.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
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
