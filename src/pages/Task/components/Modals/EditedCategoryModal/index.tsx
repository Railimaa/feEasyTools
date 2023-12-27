/* eslint-disable react/require-default-props */
import { Trash } from '../../../../../assets/Icons/Trash';
import { Button } from '../../../../../components/Button';
import { ConfirmDeleteModal } from '../../../../../components/ConfirmDeleteModal';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';
import { ICategoryTask } from '../../../../../types/CategoryTask';

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

        <Button isLoading={isLoading}>Salvar</Button>
      </Form>
    </Modal>
  );
}
