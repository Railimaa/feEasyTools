import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useCategorieTask } from '../../../../../hooks/useCategoriesTask';
import { taskService } from '../../../../../services/taskService';
import { useTaskContext } from '../../TaskContext/useTaskContext';

export function useNewTaskModal() {
  const { openNewTaskModal, handleCloseNewTaskModal } = useTaskContext();
  const { categoriesTask } = useCategorieTask();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome'),
    description: z.string().optional(),
    categoryId: z.string().min(1, 'Informe a categoria'),
    dueDate: z.date(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const useQuery = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await taskService.create({
        ...data,
        description: data.description ? data.description : null,
        dueDate: data.dueDate.toISOString(),
      });
      useQuery.invalidateQueries(['tasks']);
      reset();
      handleCloseNewTaskModal();
      toast.success('Tarefa cadastrada com sucesso!');
    } catch {
      toast.error('Erro ao cadastrar tarefa!');
    } finally {
      setIsLoading(false);
    }
  });

  return {
    openNewTaskModal,
    handleCloseNewTaskModal,
    handleSubmit,
    register,
    control,
    errors,
    isLoading,
    categoriesTask,
  };
}
