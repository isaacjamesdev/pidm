import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import { consultarAluno } from "../api/firebaseAPI";

const AlunoCadastro = () => {
    const [aluno, setAluno] = useState({
        id: '',
        nome: '',
        curso: '',
    });

    const changeForm = (field, valeu) => {
        setAluno(old => ({
            ...old,
            [field]: valeu
        }));
    };

    return (
        <View>
            <Text>CADASTRO</Text>
            <View>
                <Text>ID:</Text>
                <TextInput 
                    onChange={text => changeForm('id', text)}
                />
            </View>
            <View>
                <Text>Nome:</Text>
                <TextInput 
                    onChange={text => changeForm('nome', text)}
                />
            </View>
            <View>
                <Text>curso:</Text>
                <TextInput 
                    onChange={text => changeForm('curso', text)}
                />
            </View>
            <View>
                <Button 
                    title="Cadastrar"
                    onPress={()=> consultarAluno(aluno)}
                />
            </View>
        </View>
    )
};

export default AlunoCadastro;
