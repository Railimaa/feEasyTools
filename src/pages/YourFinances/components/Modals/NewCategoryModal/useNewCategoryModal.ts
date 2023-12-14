import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { categoriesTransactionService } from '../../../../../services/categoriesTransactionService';
import { useYourFinancesContext } from '../../YourFinancesContext/useYourFinancesContext';

export function useNewCategoryModal() {
  const { openNewCategoryModal, handleCloseNewCategoryModal } =
    useYourFinancesContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome'),
    type: z.enum(['INCOME', 'EXPENSE']),
    icon: z.string().min(1, 'Informe o icon'),
  });

  type Formdata = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm<Formdata>({
    resolver: zodResolver(schema),
  });

  const useQuery = useQueryClient();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await categoriesTransactionService.create(data);
      useQuery.invalidateQueries(['categoriesTransaction']);
      reset();
      handleCloseNewCategoryModal();
      toast.success('Categoria cadastrada com sucesso!');
    } catch {
      toast.error('Erro ao cadastrar categoria!');
    } finally {
      setIsLoading(false);
    }
  });

  return {
    openNewCategoryModal,
    handleCloseNewCategoryModal,
    handleSubmit,
    register,
    errors,
    isLoading,
    control,
  };
}
