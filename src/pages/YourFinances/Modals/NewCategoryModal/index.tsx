import { Controller } from 'react-hook-form';

import { Button } from '../../../../components/Button';
import { IconDropDownInput } from '../../../../components/IconDropDownInput';
import { Input } from '../../../../components/Input';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';

import { Form } from './style';
import { useNewCategoryModal } from './useNewCategoryModal';

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

export function NewCategoryModal() {
  const {
    openNewCategoryModal,
    handleCloseNewCategoryModal,
    handleSubmit,
    register,
    errors,
    control,
    isLoading,
  } = useNewCategoryModal();

  return (
    <Modal
      open={openNewCategoryModal}
      title="Nova categoria"
      onClose={handleCloseNewCategoryModal}
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
              options={options}
              label="Tipo"
              onChange={onChange}
              value={value}
              error={errors.type?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="icon"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <IconDropDownInput
              onChange={onChange}
              value={value}
              error={errors.icon?.message}
            />
          )}
        />

        <Button isLoading={isLoading}>Criar</Button>
      </Form>
    </Modal>
  );
}
