import styled from 'styled-components/native';

export const ContainerBox = styled.View`
  height: 20px;
  width: 20px;
  padding: 12px;
  border: 1px solid #3e2465;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const FilledBox = styled.View`
  height: 18px;
  width: 18px;
  background: ${({ sent }) => sent ? "green" : 'transparent'};
  align-self: center;
  align-items: center;
`;

export const TouchableBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  padding: 2px;
  margin: auto;
`;