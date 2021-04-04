import React from 'react';
import * as S from './Styled';

const Card = ({ activities = [] }) => (
  <S.Wrap>
    <S.Highlight head>
      <S.HeadBlock head>
        <S.HeadText sent>
          Submetido
        </S.HeadText>
      </S.HeadBlock>
      <S.HeadBlock head>
        <S.HeadText>
          Descrição
        </S.HeadText>
      </S.HeadBlock>
      <S.HeadBlock head>
        <S.HeadText>
          Categoria
        </S.HeadText>
      </S.HeadBlock>
      <S.HeadBlock head>
        <S.HeadText>
          Horas R.
        </S.HeadText>
      </S.HeadBlock>
      <S.HeadBlock head>
        <S.HeadText>
          Horas C.
        </S.HeadText>
      </S.HeadBlock>
    </S.Highlight>
    {activities.length ?
      activities.map((i, idx) =>
      (
        <S.Highlight key={idx}>
          <S.HeadBlock>
            <S.StatusText sent={i.sent}>
              {`${'\u2B24'}`}
            </S.StatusText>
          </S.HeadBlock>
          <S.HeadBlock>
            <S.Text>{i.description}</S.Text>
          </S.HeadBlock>
          <S.HeadBlock>
            <S.Text>{i.category}</S.Text>
          </S.HeadBlock>
          <S.HeadBlock>
            <S.Text>{i.hr}</S.Text>
          </S.HeadBlock>
          <S.HeadBlock>
            <S.Text>{i.hc}</S.Text>
          </S.HeadBlock>
        </S.Highlight>
      ))
      :
      <S.Text>
        Não há atividades registradas
      </S.Text>
    }
  </S.Wrap>
);

export default Card;