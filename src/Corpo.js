import React from 'react';
import {View, Image} from 'react-native';
import alunoImg from '../assets/aluno-img.jpg';

const Corpo = ()=> <View>
    <Image source={alunoImg} width={200} height={200} />
</View>

export default Corpo;