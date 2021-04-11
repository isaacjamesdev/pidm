import React, { useState, useCallback } from 'react';
import Button from '../components/button/Button';
import DefaultContainer from '../components/defaultContainer/DefaultContainer';
import TextInput from '../components/TextInput/TextInput';
import Title from '../components/title';

const SignIn = () => {
  const [newStudent, setNewStudent] = useState({
    matricula: '',
    senha: '',
  });

  const setField = useCallback((field, value) => {
    setNewStudent(oldState => ({
      ...oldState,
      [field]: value
    }), [newStudent])
  });

  return (
    <DefaultContainer>
      <Title>Login</Title>
      <TextInput
        placeholder="Matricula"
        value={newStudent.category}
        onChangeText={value => setField("matricula", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Senha"
        value={newStudent.senha}
        onChangeText={value => setField("senha", value)}
      />

      <Button
        title="Entrar"
        // onPress={() => setNewStudent(newStudent)}
        onPress={() => console.log(newStudent)}
        primary
      />
      <Button
        title="Cadastre-se"
        // onPress={() => setNewStudent(newStudent)}
        onPress={() => console.log(newStudent)}
      />
    </DefaultContainer>
  );
}

export default SignIn;