import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#694fad"
})`
    padding: 10px;
    border: 1px solid #3e2465;
    border-radius: 5px;
    margin: 10px 0;
    background-color: ${({disabled}) => disabled ? '#E5E5E5' : 'white'}
`;