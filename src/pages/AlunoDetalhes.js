import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { consultarAluno } from "../api/firebaseAPI";

const AlunoDetalhes = () => {
    const [matricula, setMatricula] = useState();
    const [aluno, setAluno] = useState({
        matricula: '123',
        nome: 'Teste',
        curso: 'Curso Teste',
    });

    return (
        <View>
            <View>
                <Text>Digite a matricula do aluno</Text>
                <TextInput 
                    onChange={matricula => setMatricula(matricula)}
                    keyboardType="numeric"
                />
                <Button 
                    title="Consultar"
                    onPress={()=> consultarAluno(matricula).then(aluno =>{
                        setAluno(aluno);
                    })}
                />
            </View>
            <Text>-----Detalhes do aluno-----</Text>
            <View>
                <Text>ID: {aluno.matricula}</Text>
                <Text>Nome: {aluno.nome}</Text>
                <Text>curso: {aluno.curso}</Text>
            </View>
        </View>
    );
}

export default AlunoDetalhes;
