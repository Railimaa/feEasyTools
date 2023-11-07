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
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          showPassword
          {...register('password')}
        />

        <Button isLoading={isLoading}>Entrar</Button>
      </FormSigninAndSignup>
    </Container>
  );
}
