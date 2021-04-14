import { useNavigation } from '@react-navigation/core';
import React, { useState, useCallback } from 'react';
import Button from '../components/button/Button';
import DefaultContainer from '../components/defaultContainer/DefaultContainer';
import TextInput from '../components/textInput';
import Title from '../components/title';
import { useAuth } from '../hooks/useAuth';

const SignIn = () => {
  const [student, setStudent] = useState({
    matricula: '390242',
    senha: '123456',
  });
  const navigation = useNavigation();
  const { login } = useAuth();

  const setField = useCallback((field, value) => {
    setStudent(oldState => ({
      ...oldState,
      [field]: value
    }), [student])
  });

  const handleLogin = (student)=>{
    login(student).then((permission)=>{
      if(permission){
        navigation.navigate("AppRoutes")
      }else{
        alert("Falha ao logar")
      }
    });
  }

  return (
    <DefaultContainer>
      <Title>Login</Title>
      <TextInput
        placeholder="Matricula"
        value={student.matricula}
        onChangeText={value => setField("matricula", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Senha"
        value={student.senha}
        onChangeText={value => setField("senha", value)}
      />

      <Button
        title="Entrar"
        onPress={()=> handleLogin(student)}
        primary
      />
      <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate("SignUp")}
      />
    </DefaultContainer>
  );
}

export default SignIn;