/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */

import { Controller } from 'react-hook-form';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { DropdownImage } from './DropdownImage';
import { InputFile } from './InputFile';
import { Container, Form } from './style';
import { useProfile } from './useProfile';

export function Profile() {
  const { register, handleSubmit, isLoading, control, user, errors } =
    useProfile();

  return (
    <>
      <Header />

      <Container>
        <Form onSubmit={handleSubmit}>
          <DropdownImage />

          <Controller
            control={control}
            name="imagePath"
            render={({ field: { onChange, value } }) => (
              <InputFile
                type="file"
                accept="image/*"
                defaultValue={(value as File)?.name || ''}
                onChange={(event) => {
                  onChange(event.target.files?.[0]);
                }}
                imagePath={!!user?.imagePath}
              />
            )}
          />

          <fieldset
            style={{
              padding: '16px',
              border: '1px solid #9775fa',
              marginTop: '20px',
              borderRadius: '16px',
            }}
          >
            <legend style={{ color: '#fff', fontSize: '16px', padding: '8px' }}>
              Dados pessoais
            </legend>

            <Input
              label="Nome"
              error={errors.name?.message}
              {...register('name')}
            />

            <Input
              label="Sobrenome"
              error={errors.secondName?.message}
              {...register('secondName')}
            />

            <Input
              label="E-mail"
              error={errors.email?.message}
              {...register('email')}
            />
          </fieldset>

          <Button isLoading={isLoading}>Salvar alterações</Button>
        </Form>
      </Container>
    </>
  );
}
