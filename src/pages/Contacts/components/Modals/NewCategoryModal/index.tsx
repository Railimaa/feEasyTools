import { Controller } from 'react-hook-form';

import { Button } from '../../../../../components/Button';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';
import { DropdownIcons } from '../../Categories/DropdownIcons';

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
    control,
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

        <Controller
          control={control}
          name="icon"
          render={({ field: { onChange, value } }) => (
            <DropdownIcons onChange={onChange} value={value} />
          )}
        />

        <Button isLoading={isLoading}>Cadastrar</Button>
      </Form>
    </Modal>
  );
}
