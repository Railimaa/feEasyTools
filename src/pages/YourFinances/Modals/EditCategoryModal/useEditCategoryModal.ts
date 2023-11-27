import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { categoriesTransactionService } from '../../../../services/categoriesTransactionService';
import { useYourFinancesContext } from '../../components/YourFinancesContext/useYourFinancesContext';

export function useEditCategoryModal() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    openEditCategoryModal,
    handleCloseEditCategoryModal,
    categoryIsBeingEdited,
  } = useYourFinancesContext();

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
      reset();
      useQuery.invalidateQueries(['categoriesTransaction']);
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

  return {
    handleSubmit,
    isLoading,
    register,
    control,
    errors,
    openEditCategoryModal,
    handleCloseEditCategoryModal,
    categoryIsBeingEdited,
  };
}
