import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';
import { deleteActivity, editActivity, setActivity } from '../../hooks/Activities';
import CheckBox from '../checkbox';
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
        <>
          <S.Highlight key={i.id}>
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
          <S.Bottomlight key={i.id}>
            <S.BottomBlock>
              <TouchableOpacity
                onPress={() => console.log("pencil")}
                hitSlop={{ top: 20, bottom: 20, left: 100, right: 100 }}
              >
                <MaterialCommunityIcons name="pencil" color={"#3e2465"} size={18} />
              </TouchableOpacity>
            </S.BottomBlock>
            <S.BottomBlock>
              <CheckBox
                onChange={value => editActivity(i.id, {
                  ...i,
                  sent: value
                })}
                checked={!!i.sent}
              />
            </S.BottomBlock>
            <S.BottomBlock>
              <TouchableOpacity
                onPress={() => deleteActivity(i.id)}
              >
                <MaterialCommunityIcons name="trash-can" color={"#3e2465"} size={18} />
              </TouchableOpacity>
            </S.BottomBlock>
          </S.Bottomlight>
        </>
      ))
      :
      <S.Text>
        Não há atividades registradas
      </S.Text>
    }
  </S.Wrap>
);

export default Card;