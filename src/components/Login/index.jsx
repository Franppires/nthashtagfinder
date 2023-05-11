import React from 'react';
import {
  Access,
  Field,
  FormContainer,
  FormFields,
  Title,
  Wrapper,
} from './styled';
import Header from '../Header';
import { Link } from 'react-router-dom';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    window.location.href = '/search';
  };

  return (
    <>
      <Header />
      <Wrapper>
        <FormContainer>
          <FormFields>
            <Title>Login</Title>
            <Field type='text' placeholder='Usuário' />
            <Field type='password' placeholder='Senha' />
            <Link to='/search'>
              {/* access to search page */}
              <Access type='submit' onClick={handleSubmit}>
                ACESSAR
              </Access>
            </Link>
          </FormFields>
        </FormContainer>
      </Wrapper>
    </>
  );
}
