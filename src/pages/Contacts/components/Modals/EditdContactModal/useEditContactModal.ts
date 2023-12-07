import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useCategoriesContacts } from '../../../../../hooks/useCategoriesContact';
import { contactsService } from '../../../../../services/contacts';
import { formatPhoneNumber } from '../../../../../utils/formatPhoneNumber';
import { useContactContext } from '../../ContactContext/useContactContext';

export function useEditContactModal() {
  const {
    contactIsBeingEdited,
    openEditContactModal,
    handleCloseEditedContactModal,
  } = useContactContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome'),
    categoryId: z.string().min(1, 'Informe a categoria'),
    phone: z.string().optional(),
    email: z
      .string()
      .refine((value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
        message: 'Informe um e-mail válido',
      })
      .nullable(),
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
      name: contactIsBeingEdited?.name,
      categoryId: contactIsBeingEdited?.categoryId,
      phone: contactIsBeingEdited?.phone,
      email: contactIsBeingEdited?.email,
    },
  });

  const useQuery = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await contactsService.update({
        ...data,
        phone: data.phone && formatPhoneNumber(data.phone),
        email: data.email ? data.email : undefined,
        id: contactIsBeingEdited!.id,
      });
      useQuery.invalidateQueries(['contacts']);
      reset();
      handleCloseEditedContactModal();
      toast.success('Contato editado com sucesso!');
    } catch {
      toast.error('Erro ao editar o contato!');
    } finally {
      setIsLoading(false);
    }
  });

  const { categoriesContact } = useCategoriesContacts();

  return {
    openEditContactModal,
    contactIsBeingEdited,
    handleCloseEditedContactModal,
    categoriesContact,
    handleSubmit,
    register,
    control,
    errors,
    isLoading,
  };
}
