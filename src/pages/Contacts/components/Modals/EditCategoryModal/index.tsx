import { Button } from '../../../../../components/Button';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';

import { Form } from './style';
import { useEditCategoryModal } from './useEditCategoryModal';

export function EditCategoryModal() {
  const {
    openEditCategoryContact,
    handleCloseEditedCategoryModal,
    handleSubmit,
    register,
    errors,
    isLoading,
  } = useEditCategoryModal();

  return (
    <Modal
      open={openEditCategoryContact}
      onClose={handleCloseEditedCategoryModal}
      title="Editar categoria"
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
