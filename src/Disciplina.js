import React from "react";
import { View, Text } from "react-native";

const Disciplina = ({ disciplina }) => (
  <View>
    <Text>Matriculado em: {disciplina}</Text>
  </View>
);

export default Disciplina;
