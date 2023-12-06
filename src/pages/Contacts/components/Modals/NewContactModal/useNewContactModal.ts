import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { formatPhoneNumber } from '../../../../../utils/formatPhoneNumber';
import { useContactContext } from '../../ContactContext/useContactContext';

export function useNewContactModal() {
  const { openNewContactModal, handleCloseNewContactModal } =
    useContactContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome'),
    email: z
      .string()
      .refine((value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
        message: 'Informe um e-mail válido',
      })
      .nullable(),
    phone: z.string().optional(),
    categoryId: z.string().min(1, 'Informe a categoria'),
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

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      console.log({
        ...data,
        phone: data.phone ? formatPhoneNumber(data.phone) : data.phone,
      });
      reset();
    } catch {
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
  };
}
