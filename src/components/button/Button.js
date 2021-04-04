import React from 'react';
import * as S from './Styled';

const Button = (props) => (
  <S.Btn
    {...props}
  >
    <S.Title
      {...props}
    >
      {props.title}
    </S.Title>
  </S.Btn>
);

export default Button;