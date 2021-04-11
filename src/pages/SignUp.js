import React, { useState, useCallback } from 'react';
import Button from '../components/button/Button';
import DefaultContainer from '../components/defaultContainer/DefaultContainer';
import TextInput from '../components/TextInput/TextInput';
import Title from '../components/title';

const SignUp = () => {
  const [newStudent, setNewStudent] = useState({
    matricula: '',
    nome: '',
    curso: '',
    horasNecessarias: '',
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
      <Title>Sign Up</Title>
      <TextInput
        placeholder="Matricula"
        value={newStudent.category}
        onChangeText={value => setField("matricula", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Nome"
        value={newStudent.description}
        onChangeText={value => setField("nome", value)}
      />
      <TextInput
        placeholder="Curso"
        value={newStudent.hr}
        onChangeText={value => setField("curso", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Horas Becessarias"
        value={newStudent.hc}
        onChangeText={value => setField("horasNecessarias", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Senha"
        value={newStudent.senha}
        onChangeText={value => setField("senha", value)}
      />

      <Button
        title="Cadastre-se"
        // onPress={() => setNewStudent(newStudent)}
        onPress={() => console.log(newStudent)}
        primary
      />
    </DefaultContainer>
  );
}

export default SignUp;