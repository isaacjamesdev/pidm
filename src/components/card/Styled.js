import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 16px;
  flex: 1;
  color: purple;
`;

export const StatusText = styled(Text)`
  color: ${({sent}) =>
    sent ? "green" : "blue"};
`;

export const Wrap = styled.View`
  margin: 10px 0;
  background: lightgray;
  border-radius: 20px;
  overflow: hidden;
`;

export const Highlight = styled.View`
  background: darkgrey;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const Content = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
`;