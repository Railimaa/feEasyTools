import { Controller } from 'react-hook-form';

import { Trash } from '../../../../../assets/Icons/Trash';
import { Button } from '../../../../../components/Button';
import { ConfirmDeleteModal } from '../../../../../components/ConfirmDeleteModal';
import { DatePickerInput } from '../../../../../components/DatePickerInput';
import { Input } from '../../../../../components/Input';
import { Modal } from '../../../../../components/Modal';
import { RadioGroup } from '../../../../../components/RadioGroup';
import { Select } from '../../../../../components/Select';
import { TextArea } from '../../../../../components/TextArea';

import { Form } from './style';
import { useEditedTaskModal } from './useEditedTaskModal';

const optionsStatusTask = [
  { value: 'true', label: 'Conclúida' },
  { value: 'false', label: 'Não conclúida' },
];

export function EditedTaskModal() {
  const {
    openEditedTaskModal,
    handleCloseEditTaskModal,
    handleSubmit,
    control,
    register,
    errors,
    isLoading,
    openDeleteModal,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    handleDeleteTask,
    categories,
  } = useEditedTaskModal();

  if (openDeleteModal) {
    return (
      <ConfirmDeleteModal
        title="tarefa"
        onConfirm={handleDeleteTask}
        isLoading={isLoading}
        onClose={handleCloseDeleteModal}
      />
    );
  }

  return (
    <Modal
      open={openEditedTaskModal}
      onClose={handleCloseEditTaskModal}
      title="Editar tarefa"
      rightAction={
        <button type="button" onClick={handleOpenDeleteModal}>
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
          name="description"
          render={({ field: { onChange, value } }) => (
            <TextArea
              value={value}
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
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          )}
        />

        <Controller
          control={control}
          name="dueDate"
          render={({ field: { onChange, value } }) => (
            <DatePickerInput value={value} onChange={onChange} />
          )}
        />

        <Controller
          control={control}
          name="done"
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              options={optionsStatusTask}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Button isLoading={isLoading} id="save">
          Salvar
        </Button>
      </Form>
    </Modal>
  );
}
