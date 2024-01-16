import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { categoriesTransactionService } from '../../../../../services/categoriesTransactionService';
import { useYourFinancesContext } from '../../YourFinancesContext/useYourFinancesContext';

export function useEditCategoryModal() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    openEditCategoryModal,
    handleCloseEditCategoryModal,
    categoryIsBeingEdited,
  } = useYourFinancesContext();

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  function handleOpenDeleteModal() {
    setOpenDeleteModal(true);
  }

  function handleCloseDeleteModal() {
    setOpenDeleteModal(false);
  }

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome'),
    type: z.enum(['INCOME', 'EXPENSE']),
    icon: z.string().min(1, 'Informe o icon'),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: categoryIsBeingEdited?.name,
      type: categoryIsBeingEdited?.type,
      icon: categoryIsBeingEdited!.icon,
    },
  });

  const useQuery = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await categoriesTransactionService.update({
        ...data,
        id: categoryIsBeingEdited!.id,
      });
      useQuery.invalidateQueries(['categoriesTransaction']);
      useQuery.invalidateQueries(['transactions']);
      reset();
      handleCloseEditCategoryModal();
      toast.success(
        categoryIsBeingEdited?.type === 'INCOME'
          ? 'Categoria de receita editada com sucesso!'
          : 'Categoria de despesa editada com sucesso!',
      );
    } catch {
      toast.error(
        categoryIsBeingEdited?.type === 'INCOME'
          ? 'Erro ao editar categoria de receita!'
          : 'Erro ao editar categoria de despesa!',
      );
    } finally {
      setIsLoading(false);
    }
  });

  async function handleDeleteCategory() {
    try {
      setIsLoading(true);

      await categoriesTransactionService.deleted(categoryIsBeingEdited!.id);
      useQuery.invalidateQueries(['categoriesTransaction']);
      useQuery.invalidateQueries(['transactions']);
      handleCloseEditCategoryModal();
      toast.success(
        categoryIsBeingEdited?.type === 'INCOME'
          ? 'Categoria de receita deletada com sucesso!'
          : 'Categoria de despesa deletada com sucesso!',
      );
    } catch {
      toast.error('Erro ao deletar categoria!');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    handleSubmit,
    isLoading,
    register,
    control,
    errors,
    openEditCategoryModal,
    handleCloseEditCategoryModal,
    categoryIsBeingEdited,
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteCategory,
  };
}
