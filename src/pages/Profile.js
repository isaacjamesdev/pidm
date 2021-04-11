import React, { useState, useEffect, useCallback } from 'react';
import Button from '../components/button/Button';
import DefaultContainer from '../components/defaultContainer/DefaultContainer';
import ProfileImage from '../components/profileImage';
import TextInput from '../components/TextInput/TextInput';
import Title from '../components/title';
import { getStudents, setStudent } from '../hooks/useActivities';

const Profile = () => {
  const [newStudent, setNewStudent] = useState({
    matricula: '',
    nome: '',
    curso: '',
    horasNecessarias: '',
    senha: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudents("390242").then(data => {
      if (data)
        setNewStudent(data);
    }).finally(() => {
      setLoading(false);
    })
  }, []);

  const setField = useCallback((field, value) => {
    setNewStudent(oldState => ({
      ...oldState,
      [field]: value
    }), [newStudent])
  });

  return (
    <DefaultContainer>
      <Title>Profile</Title>
      <ProfileImage
      // src=""
      />
      <TextInput
        placeholder="Matricula"
        value={newStudent.matricula}
        onChangeText={value => setField("matricula", value)}
        keyboardType="numeric"
        disabled
      />
      <TextInput
        placeholder="Nome"
        value={newStudent.nome}
        onChangeText={value => setField("nome", value)}
      />
      <TextInput
        placeholder="Curso"
        value={newStudent.curso}
        onChangeText={value => setField("curso", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Horas Becessarias"
        value={newStudent.horasNecessarias}
        onChangeText={value => setField("horasNecessarias", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Senha"
        value={newStudent.senha}
        onChangeText={value => setField("senha", value)}
      />

      <Button
        title="Cadastrar"
        // onPress={() => setNewStudent(newStudent)}
        onPress={() => setStudent(newStudent)}
        primary
      />
    </DefaultContainer>
  );
}

export default Profile;