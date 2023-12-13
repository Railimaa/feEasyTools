import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useCategoriesContacts } from '../../../../../hooks/useCategoriesContact';
import { contactsService } from '../../../../../services/contactsService';
import { formatPhoneNumber } from '../../../../../utils/formatPhoneNumber';
import { useContactContext } from '../../ContactContext/useContactContext';

export function useNewContactModal() {
  const { openNewContactModal, handleCloseNewContactModal } =
    useContactContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { categoriesContact } = useCategoriesContacts();

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome'),
    categoryId: z.string().min(1, 'Informe a categoria'),
    phone: z.string().optional(),
    email: z
      .string()
      .refine((value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
        message: 'Informe um e-mail válido',
      })
      .optional(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await contactsService.create({
        ...data,
        phone: data.phone ? formatPhoneNumber(data.phone) : null,
        email: data.email ? data.email : null,
      });
      queryClient.invalidateQueries(['contacts']);
      reset();
      handleCloseNewContactModal();
      toast.success('Contato cadastrado com sucesso!');
    } catch {
      toast.error('Erro ao cadastrar contato!');
    } finally {
      setIsLoading(false);
    }
  });

  return {
    openNewContactModal,
    handleCloseNewContactModal,
    handleSubmit,
    isLoading,
    register,
    errors,
    control,
    categoriesContact,
  };
}
