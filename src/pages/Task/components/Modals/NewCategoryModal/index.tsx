import { Controller } from 'react-hook-form';

import { Button } from '../../../../../components/Button';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';
import { IconsDropdown } from '../../IconsDropdown';

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
    control,
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

        <Controller
          control={control}
          name="icon"
          render={({ field: { onChange, value } }) => (
            <IconsDropdown onChange={onChange} value={value} />
          )}
        />

        <Button isLoading={isLoading}>Criar</Button>
      </Form>
    </Modal>
  );
}
