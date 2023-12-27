import { Button } from '../../../../../components/Button';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';

import { Form } from './style';
import { useNewCategoryModal } from './useNewCategoryModal';

export function NewCategoryModal() {
  const {
    openNewCategoryModal,
    handleCloseCategoryModal,
    handleSubmit,
    register,
    errors,
    isLoading,
  } = useNewCategoryModal();

  return (
    <Modal
      title="Nova categoria"
      open={openNewCategoryModal}
      onClose={handleCloseCategoryModal}
    >
      <Form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          error={errors.name?.message}
          {...register('name')}
        />

        <Button isLoading={isLoading}>Criar</Button>
      </Form>
    </Modal>
  );
}
