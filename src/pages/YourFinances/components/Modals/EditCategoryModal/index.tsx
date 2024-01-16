import { Controller } from 'react-hook-form';

import { Trash } from '../../../../../assets/Icons/Trash';
import { Button } from '../../../../../components/Button';
import { ConfirmDeleteModal } from '../../../../../components/ConfirmDeleteModal';
import { IconDropDownInput } from '../../../../../components/IconDropDown';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';
import { Select } from '../../../../../components/Select';

import { Form } from './style';
import { useEditCategoryModal } from './useEditCategoryModal';

const options = [
  {
    value: 'INCOME',
    label: 'Receita',
  },
  {
    value: 'EXPENSE',
    label: 'Despesa',
  },
];

export function EditCategoryModal() {
  const {
    openEditCategoryModal,
    handleCloseEditCategoryModal,
    handleSubmit,
    register,
    control,
    errors,
    isLoading,
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteCategory,
  } = useEditCategoryModal();

  if (openDeleteModal) {
    return (
      <ConfirmDeleteModal
        isLoading={isLoading}
        onClose={handleCloseDeleteModal}
        title="categoria"
        onConfirm={handleDeleteCategory}
      />
    );
  }

  return (
    <Modal
      open={openEditCategoryModal}
      onClose={handleCloseEditCategoryModal}
      title="Editar categoria"
      rightAction={
        <button type="button" onClick={handleOpenDeleteModal}>
          <Trash />
        </button>
      }
    >
      <Form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          error={errors.name?.message}
          {...register('name')}
        />

        <Controller
          control={control}
          name="type"
          render={({ field: { onChange, value } }) => (
            <Select
              label="Tipo"
              options={options}
              error={errors.type?.message}
              onChange={onChange}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="icon"
          render={({ field: { onChange, value } }) => (
            <IconDropDownInput
              onChange={onChange}
              value={value}
              error={errors.icon?.message}
            />
          )}
        />

        <Button isLoading={isLoading}>Salvar</Button>
      </Form>
    </Modal>
  );
}
