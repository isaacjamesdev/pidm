import styled from 'styled-components/native';

export const Btn = styled.TouchableOpacity`
    background-color: ${props => props.primary ? "#3e2465" : "white"};
    margin: 10px 0 6px 0;
    padding: 8px;
    border: 2px solid #3e2465;
    border-radius: 5px;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${props => props.primary ? "white" : "#3e2465"};
`;