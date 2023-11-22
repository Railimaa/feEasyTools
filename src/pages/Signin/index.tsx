import { LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';

import { Button } from '../../components/Button';
import { FormSigninAndSignup } from '../../components/FormSigninAndSignup';
import { Input } from '../../components/Input';

import { Container } from './style';
import { useSignin } from './useSignin';

export function Signin() {
  const { handleSubmit, register, errors, isLoading } = useSignin();

  return (
    <Container>
      <FormSigninAndSignup
        title="Entre em sua conta"
        subtitle="Novo por aqui?"
        textPath="Crie uma conta"
        path="/register"
        OnSubmit={handleSubmit}
      >
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

        <Button isLoading={isLoading}>Entrar</Button>
      </FormSigninAndSignup>
    </Container>
  );
}
