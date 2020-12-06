import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/Cabecalho';
import Corpo from './src/Corpo';
import Disciplina from './src/Disciplina';

const disciplinasMatriculados = ['História, Inglês, Matemática, Fotografia']

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome="Joãozinho" curso="Pedagogia"/>
      <Corpo  />

      {disciplinasMatriculados.map((x) => (
          <Disciplina disciplina={x} />
      ))}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
