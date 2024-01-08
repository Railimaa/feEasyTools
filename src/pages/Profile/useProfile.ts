import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { UseAuth } from '../../contexts/useAuth';
import { usersService } from '../../services/usersService';

export function useProfile() {
  const { user } = UseAuth();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = z.object({
    name: z.string().min(1, 'Informe o nome'),
    secondName: z.string().min(1, 'Informe o sobrenome'),
    email: z
      .string()
      .min(1, 'Informe o e-mail')
      .email('Informe um e-mail válido'),
    imagePath: z
      .unknown()
      .refine((value) => {
        if (
          typeof value === 'string' ||
          value instanceof File ||
          value === undefined
        ) {
          return true;
        }
        return 'Invalid file type';
      })
      .optional(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user?.name,
      secondName: user?.secondName,
      email: user?.email,
    },
  });

  const useQuery = useQueryClient();
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await usersService.update({
        ...data,
        id: user!.id,
        imagePath: data.imagePath instanceof File ? data.imagePath : undefined,
      });
      toast.success('Perfil editado com sucesso!');
      useQuery.invalidateQueries(['users', 'me']);
    } catch {
      toast.error('Ocorreu um erro ao editar o perfil!');
    } finally {
      setIsLoading(false);
    }
  });

  return {
    register,
    errors,
    handleSubmit,
    control,
    isLoading,
    user,
  };
}
