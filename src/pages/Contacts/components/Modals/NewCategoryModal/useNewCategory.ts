import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { categoriesContactService } from '../../../../../services/categoriesContactService';
import { useContactContext } from '../../ContactContext/useContactContext';

export function useNewCategoryModal() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleCloseNewCategoryContactModal, openNewCategoryContact } =
    useContactContext();

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome.'),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const useQuery = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await categoriesContactService.create(data);
      useQuery.invalidateQueries(['categoryContact']);
      handleCloseNewCategoryContactModal();
      toast.success('Categoria criada com sucesso!');
    } catch {
      toast.error('Erro ao criar categoria!');
    } finally {
      setIsLoading(false);
    }
  });

  return {
    handleSubmit,
    register,
    errors,
    isLoading,
    openNewCategoryContact,
    handleCloseNewCategoryContactModal,
  };
}
