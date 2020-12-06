import React from 'react';
import {View, Text} from 'react-native';

const Cabecalho = ({nome, curso})=> <View>
    <Text>Aluno: {nome}</Text>
    <Text>curso: {curso}</Text>
</View>

export default Cabecalho;