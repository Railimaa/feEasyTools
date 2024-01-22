import { LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';

import { Button } from '../../components/Button';
import { FormSigninAndSignup } from '../../components/FormSigninAndSignup';
import { Input } from '../../components/Input';

import { Container } from './style';
import { useSignup } from './useSignup';

export default function Signup() {
  const { handleSubmit, register, errors, isLoading } = useSignup();

  return (
    <Container>
      <FormSigninAndSignup
        title="Crie sua conta"
        subtitle="Já possui uma conta?"
        textPath="Fazer login"
        path="/login"
        OnSubmit={handleSubmit}
      >
        <Input
          type="text"
          label="Nome"
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          type="text"
          label="Sobrenome"
          error={errors.secondName?.message}
          {...register('secondName')}
        />

        <Input
          type="email"
          placeholder="E-mail"
          icon={<PersonIcon width={20} height={20} color="#5f3dc4" />}
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          type="password"
          placeholder="Senha"
          icon={<LockClosedIcon width={20} height={20} color="#5f3dc4" />}
          error={errors.password?.message}
          showPassword
          {...register('password')}
        />

        <Button isLoading={isLoading}>Criar conta</Button>
      </FormSigninAndSignup>
    </Container>
  );
}
