import { Controller } from 'react-hook-form';

import { Button } from '../../../../../components/Button';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';
import { DropdownIcons } from '../../Categories/DropdownIcons';

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
    control,
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

        <Controller
          control={control}
          name="icon"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <DropdownIcons onChange={onChange} value={value} />
          )}
        />

        <Button isLoading={isLoading}>Salvar</Button>
      </Form>
    </Modal>
  );
}
