/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form } from './style';

interface IFormSigninAndSignupProps {
  title: string;
  subtitle: string;
  path: string;
  textPath: string;
  children: React.ReactNode;
  OnSubmit?: () => void;
}

export function FormSigninAndSignup({
  title,
  subtitle,
  path,
  textPath,
  children,
  OnSubmit,
}: IFormSigninAndSignupProps) {
  return (
    <Container>
      <header>
        <h1>{title}</h1>

        <p>
          <span>{subtitle}</span>
          <Link to={path}>{textPath}</Link>
        </p>
      </header>

      <Form onSubmit={OnSubmit}>{children}</Form>
    </Container>
  );
}
