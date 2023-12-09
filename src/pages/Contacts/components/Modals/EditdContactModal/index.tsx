import { Controller } from 'react-hook-form';

import { Button } from '../../../../../components/Button';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';
import { Select } from '../../../../../components/Select';

import { Form } from './style';
import { useEditContactModal } from './useEditContactModal';

export function EditContactModal() {
  const {
    openEditContactModal,
    handleCloseEditedContactModal,
    categoriesContact,
    handleSubmit,
    register,
    control,
    errors,
    isLoading,
  } = useEditContactModal();

  return (
    <Modal
      open={openEditContactModal}
      onClose={handleCloseEditedContactModal}
      title="Editar contato"
    >
      <Form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          label="E-mail"
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Telefone"
          error={errors.phone?.message}
          maxLength={15}
          {...register('phone')}
        />

        <Controller
          control={control}
          name="categoryId"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Select
              label="Categoria"
              onChange={onChange}
              value={value}
              error={errors.categoryId?.message}
              options={categoriesContact.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          )}
        />

        <Button isLoading={isLoading}>Salvar</Button>
      </Form>
    </Modal>
  );
}
