import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { categoryTaskService } from '../../../../../services/categoriesTaskService';
import { useTaskContext } from '../../TaskContext/useTaskContext';

export function useNewCategoryModal() {
  const { openNewCategoryModal, handleCloseCategoryModal } = useTaskContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome.'),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const useQuery = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await categoryTaskService.create(data);
      useQuery.invalidateQueries(['categoryTask']);
      reset();
      handleCloseCategoryModal();
      toast.success('Categoria criada com sucesso!');
    } catch {
      toast.error('Erro ao criar categoria!');
    } finally {
      setIsLoading(false);
    }
  });

  return {
    openNewCategoryModal,
    handleCloseCategoryModal,
    handleSubmit,
    register,
    errors,
    isLoading,
  };
}
