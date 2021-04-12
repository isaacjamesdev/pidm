import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { deleteActivity, editActivity } from '../../hooks/useActivities';
import { useAuth } from '../../hooks/useAuth';
import CheckBox from '../checkbox';
import * as S from './Styled';

const Card = ({ activities = [] }) => {
  const { user } = useAuth();
  const navigation = useNavigation();
  return (
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
                  <CheckBox
                    onChange={value => editActivity(user.matricula, i.id, {
                      ...i,
                      sent: value
                    })}
                    checked={!!i.sent}
                  />
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
                  onPress={()=> navigation.navigate("EditActivity", {activity: i})}
                  hitSlop={{ top: 20, bottom: 20, left: 100, right: 100 }}
                >
                  <MaterialCommunityIcons name="pencil" color={"#3e2465"} size={18} />
                </TouchableOpacity>
              </S.BottomBlock>
              <S.BottomBlock>
                <TouchableOpacity
                  onPress={() => deleteActivity(user.matricula, i.id)}
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
}

export default Card;