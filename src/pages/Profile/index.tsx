/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */

import { Controller } from 'react-hook-form';

import { Button } from '../../components/Button';
import { ConfirmDeleteModal } from '../../components/ConfirmDeleteModal';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { DropdownImage } from './DropdownImage';
import { InputFile } from './InputFile';
import { Container, FieldSet, Form } from './style';
import { useProfile } from './useProfile';

export default function Profile() {
  const {
    register,
    handleSubmit,
    isLoading,
    control,
    user,
    errors,
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteModal,
    theme,
  } = useProfile();

  if (openDeleteModal) {
    return (
      <ConfirmDeleteModal
        title="Foto"
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteModal}
        isLoading={isLoading}
      />
    );
  }

  return (
    <>
      <Header />

      <Container theme={theme}>
        <Form onSubmit={handleSubmit}>
          <DropdownImage handleOpenDeleteModal={handleOpenDeleteModal} />

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

          <FieldSet theme={theme}>
            <legend>Dados pessoais</legend>

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
          </FieldSet>

          <Button isLoading={isLoading}>Salvar alterações</Button>
        </Form>
      </Container>
    </>
  );
}
