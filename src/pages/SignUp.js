import React from 'react';
import Button from '../components/button';
import DefaultContainer from '../components/defaultContainer/DefaultContainer';
import { Input } from '../components/textInput/Styled';
import Title  from '../components/title';

const SignUp = () => (
  <DefaultContainer>
      <Title>Sign Up</Title>
      <Input 
        placeholder="Matrícula"
      />
      <Input 
        placeholder="Nome"
      />
      <Input 
        placeholder="Curso"
      />
      <Input 
        placeholder="Horas necessárias"
      />
      <Input 
        placeholder="Senha"
      />
      <Button 
        title="Cadastrar"
      />
  </DefaultContainer>
);

export default SignUp;