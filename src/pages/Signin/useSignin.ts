import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { UseAuth } from '../../contexts/useAuth';
import { authService } from '../../services/authService';

export function useSignin() {
  const [isLoading, setIsLoading] = useState(false);

  const schema = z.object({
    email: z
      .string()
      .min(1, 'E-mail é obrigatório')
      .email('Informe um e-mail válido'),
    password: z
      .string()
      .min(1, 'Senha é obrigatória')
      .min(8, 'Senha deve conter pelo menos 8 digitos'),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { signin } = UseAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      setIsLoading(true);

      const { accessToken } = await authService.signin(data);

      signin(accessToken);
    } catch {
      toast.error('Credencíais inválidas!');
    } finally {
      setIsLoading(false);
    }
  });

  return {
    handleSubmit,
    register,
    errors,
    isLoading,
  };
}
