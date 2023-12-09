import { Button } from '../../../../../components/Button';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';

import { Form } from './style';
import { useNewCategoryModal } from './useNewCategory';

export function NewCategoryModal() {
  const {
    handleSubmit,
    errors,
    register,
    isLoading,
    openNewCategoryContact,
    handleCloseNewCategoryContactModal,
  } = useNewCategoryModal();

  return (
    <Modal
      open={openNewCategoryContact}
      onClose={handleCloseNewCategoryContactModal}
      title="Nova categoria"
    >
      <Form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          error={errors.name?.message}
          {...register('name')}
        />

        <Button isLoading={isLoading}>Cadastrar</Button>
      </Form>
    </Modal>
  );
}
