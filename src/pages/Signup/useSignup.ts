import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { UseAuth } from '../../contexts/useAuth';
import { authService } from '../../services/authService';

export function useSignup() {
  const [isLoading, setIsLoading] = useState(false);

  const schema = z.object({
    name: z.string().min(1, 'Nome é obrigatório.'),
    secondName: z.string().min(1, 'Sobrenome é obrigatório'),
    email: z
      .string()
      .min(1, 'E-mail é obrigatório')
      .email('Informe um e-mail válido'),
    password: z
      .string()
      .min(1, 'Senha é obrigatória')
      .min(8, 'Senha deve conter pelo menos 8 digitos'),
  });

  type FormData = {
    name: string;
    secondName: string;
    email: string;
    password: string;
  };

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

      const { accessToken } = await authService.signup(data);

      signin(accessToken);
    } catch {
      toast.error('Erro ao criar a conta');
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
