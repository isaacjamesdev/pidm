import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlunoCadastro from '../pages/AlunoCadastro';
import AlunoDetalhes from '../pages/AlunoDetalhes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cadastro" component={AlunoCadastro} />
        <Tab.Screen name="Aluno Detalhes" component={AlunoDetalhes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}