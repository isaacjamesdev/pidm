import React from 'react';
import * as S from './Styled';

const Card = ({ secao = "123", cityCode = "321", sent = true }) => (
  <S.Wrap>
    <S.Highlight>
      <S.StatusText sent={sent}>
        {`${'\u2B24'}  ${sent ? 'ENVIADO' : 'PENDENTE'}`}
      </S.StatusText>
    </S.Highlight>
    <S.Content>
      <S.Text>Seção: {secao}</S.Text>
      <S.Text>Município: {cityCode}</S.Text>
    </S.Content>
  </S.Wrap>
);

export default Card;