import { Controller } from 'react-hook-form';

import { Button } from '../../../../../components/Button';
import { DatePickerInput } from '../../../../../components/DatePickerInput';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';
import { Select } from '../../../../../components/Select';
import { TextArea } from '../../../../../components/TextArea';

import { Form } from './style';
import { useNewTaskModal } from './useNewTaskModal';

export function NewTaskModal() {
  const {
    openNewTaskModal,
    handleCloseNewTaskModal,
    handleSubmit,
    register,
    errors,
    isLoading,
    control,
    categoriesTask,
  } = useNewTaskModal();

  return (
    <Modal
      open={openNewTaskModal}
      onClose={handleCloseNewTaskModal}
      title="Nova tarefa"
    >
      <Form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          {...register('name')}
          error={errors.name?.message}
        />

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <TextArea
              value={value ?? ''}
              onChange={onChange}
              label="Breve descrição"
            />
          )}
        />

        <Controller
          control={control}
          name="categoryId"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              onChange={onChange}
              error={errors.categoryId?.message}
              label="Categoria"
              options={categoriesTask.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          )}
        />

        <Controller
          control={control}
          name="dueDate"
          defaultValue={new Date()}
          render={({ field: { onChange, value } }) => (
            <DatePickerInput
              value={value}
              onChange={onChange}
              error={errors.dueDate?.message}
            />
          )}
        />

        <Button isLoading={isLoading}>Criar</Button>
      </Form>
    </Modal>
  );
}
