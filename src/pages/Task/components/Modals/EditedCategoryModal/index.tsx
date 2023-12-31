/* eslint-disable react/require-default-props */
import { Controller } from 'react-hook-form';

import { Trash } from '../../../../../assets/Icons/Trash';
import { Button } from '../../../../../components/Button';
import { ConfirmDeleteModal } from '../../../../../components/ConfirmDeleteModal';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';
import { ICategoryTask } from '../../../../../types/CategoryTask';
import { IconsDropdown } from '../../IconsDropdown';

import { Form } from './style';
import { useEditedCategoryModal } from './useEditedCategoryModal';

interface IEditedCategoryModalProps {
  open: boolean;
  handleCloseModal: () => void;
  category: ICategoryTask;
}

export function EditedCategoryModal({
  open,
  handleCloseModal,
  category,
}: IEditedCategoryModalProps) {
  const {
    handleSubmit,
    register,
    isLoading,
    errors,
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteCategory,
    control,
  } = useEditedCategoryModal({
    category,
    handleCloseModal,
  });

  if (openDeleteModal) {
    return (
      <ConfirmDeleteModal
        onConfirm={handleDeleteCategory}
        onClose={handleCloseDeleteModal}
        isLoading={isLoading}
        title="categoria"
      />
    );
  }

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      title="Editar tarefa"
      rightAction={
        <button onClick={handleOpenDeleteModal} type="button">
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
          name="icon"
          render={({ field: { onChange, value } }) => (
            <IconsDropdown onChange={onChange} value={value} />
          )}
        />

        <Button isLoading={isLoading}>Salvar</Button>
      </Form>
    </Modal>
  );
}
