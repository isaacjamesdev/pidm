import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 14px;
  flex: 1;
  color: #3e2465;
  text-align: center;
  align-self: center;
  color: #3e2465;
  padding: 30px;
`;

export const StatusText = styled(Text)`
  color: ${({sent}) =>
    sent ? "green" : "gray"};
`;

export const HeadBlock = styled.View`
  border: 1px solid #3e2465;
  padding: 2px 5px;
  width: 20%;
  align-items: center;
  justify-content: center;
  border-color: ${({head}) => !head ? '#3e2465': 'white'};
`;

export const BottomBlock = styled.View`
  border: 1px solid #3e2465;
  padding: 4px 5px;
  width: 50%;
  align-items: center;
  justify-content: center;
  border-color: ${({head}) => !head ? '#3e2465': 'white'};
`;

export const HeadText = styled(Text)`
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

export const Wrap = styled.View`
  margin: 10px 0;
  overflow: hidden;
`;

export const Highlight = styled.View`
  background: ${({head}) => head ? '#3e2465': 'white'};
  flex-direction: row;
`;

export const Bottomlight = styled.View`
  background: ${({head}) => head ? '#3e2465': 'white'};
  flex-direction: row;
  margin-bottom: 10px;
`;
