import React from 'react';
import * as S from './Styled';
import James from '../../../assets/image.png'

const ProfileImage = ({src}) => (
  <S.CircleImage
    source={src || James}
  />
);

export default ProfileImage;