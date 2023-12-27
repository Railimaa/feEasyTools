import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { categoryTaskService } from '../../../../../services/categoriesTaskService';
import { ICategoryTask } from '../../../../../types/CategoryTask';

export function useEditedCategoryModal({
  category,
  handleCloseModal,
}: {
  category: ICategoryTask;
  handleCloseModal: () => void;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  function handleOpenDeleteModal() {
    setOpenDeleteModal(true);
  }

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
  }

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome!'),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: category.name,
    },
  });

  const useQuery = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await categoryTaskService.update({
        ...data,
        id: category.id,
      });
      useQuery.invalidateQueries(['categoryTask']);
      useQuery.invalidateQueries(['tasks']);
      reset();
      handleCloseModal();
      toast.success('Categoria editada com sucesso!');
    } catch {
      toast.error('Erro ao editar categoria!');
    } finally {
      setIsLoading(false);
    }
  });

  async function handleDeleteCategory() {
    try {
      setIsLoading(true);

      await categoryTaskService.deleted(category.id);
      useQuery.invalidateQueries(['categoryTask']);
      useQuery.invalidateQueries(['tasks']);
      handleCloseModal();
      toast.success('Categoria deletada com sucesso!');
    } catch {
      toast.error('Erro ao deletar categoria!');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    handleSubmit,
    errors,
    register,
    isLoading,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    openDeleteModal,
    handleDeleteCategory,
  };
}
