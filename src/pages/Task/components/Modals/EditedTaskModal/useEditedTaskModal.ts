import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useCategorieTask } from '../../../../../hooks/useCategoriesTask';
import { taskService } from '../../../../../services/taskService';
import { useTaskContext } from '../../TaskContext/useTaskContext';

export function useEditedTaskModal() {
  const { openEditedTaskModal, handleCloseEditTaskModal, taskBeingEdited } =
    useTaskContext();

  const { categoriesTask } = useCategorieTask();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  function handleOpenDeleteModal() {
    setOpenDeleteModal(true);
  }

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
  }

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome'),
    description: z.string().nullable(),
    categoryId: z.string().min(1, 'informe a categoria'),
    dueDate: z.date(),
    done: z.boolean(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: handleSubmitHookForm,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: taskBeingEdited?.name,
      description: taskBeingEdited?.description
        ? taskBeingEdited.description
        : null,
      categoryId: taskBeingEdited?.categoryId,
      dueDate: taskBeingEdited?.dueDate
        ? new Date(taskBeingEdited.dueDate)
        : new Date(),
      done: taskBeingEdited?.done,
    },
  });

  const useQuery = useQueryClient();
  const handleSubmit = handleSubmitHookForm(async (data) => {
    try {
      setIsLoading(true);

      await taskService.update({
        ...data,
        description: data.description ? data.description : null,
        dueDate: data.dueDate.toISOString(),
        id: taskBeingEdited!.id,
      });
      useQuery.invalidateQueries(['tasks']);
      reset();
      handleCloseEditTaskModal();
      toast.success('Tarefa editada com sucesso!');
    } catch (err) {
      toast.error('Erro ao editar tarefa!');
    } finally {
      setIsLoading(false);
    }
  });

  async function handleDeleteTask() {
    try {
      setIsLoading(true);

      await taskService.deleted(taskBeingEdited!.id);
      useQuery.invalidateQueries(['tasks']);
      handleCloseEditTaskModal();
      toast.success('Tarefa deletada com sucesso!');
    } catch {
      toast.error('Erro ao deletar tarefa!');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    openEditedTaskModal,
    handleCloseEditTaskModal,
    categoriesTask,
    handleSubmit,
    register,
    control,
    errors,
    isLoading,
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteTask,
    categories: categoriesTask,
  };
}
