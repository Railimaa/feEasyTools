import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { categoriesContactService } from '../../../../../services/categoriesContactService';
import { useContactContext } from '../../ContactContext/useContactContext';

export function useEditCategoryModal() {
  const {
    openEditCategoryContact,
    handleCloseEditedCategoryModal,
    categoryBeingEdited,
  } = useContactContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome'),
    icon: z.string().optional(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHanldeSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: categoryBeingEdited?.name,
      icon: categoryBeingEdited?.icon,
    },
  });

  const useQuery = useQueryClient();
  const handleSubmit = hookFormHanldeSubmit(async (data) => {
    try {
      setIsLoading(true);

      await categoriesContactService.update({
        ...data,
        icon: data.icon ? data.icon : null,
        id: categoryBeingEdited!.id,
      });
      useQuery.invalidateQueries(['categoryContact']);
      useQuery.invalidateQueries(['contacts']);
      reset();
      handleCloseEditedCategoryModal();
      toast.success('Categoria editada com sucesso!');
    } catch {
      toast.error('Erro ao editar categoria!');
    } finally {
      setIsLoading(false);
    }
  });

  return {
    openEditCategoryContact,
    handleCloseEditedCategoryModal,
    handleSubmit,
    register,
    errors,
    isLoading,
    control,
  };
}
