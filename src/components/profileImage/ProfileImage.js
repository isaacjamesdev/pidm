import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase'
import 'firebase/firestore';
import * as S from './Styled';
import { useAuth } from '../../hooks/useAuth';

const ProfileImage = () => {
  const { user } = useAuth();
  const [url, setUrl] = useState('');

  const getUrl = async () => {
    const ref = firebase.storage().ref(`uploads/${user.matricula}.jpg`);
    const uri = await ref.getDownloadURL();
    console.log("url", uri);
    setUrl(uri)
  }
  useEffect(() => {
    getUrl();
  }, [])

  return (
    <S.CircleImage
      // source={{uri: "https://firebasestorage.googleapis.com/v0/b/pidm-2020-2.appspot.com/o/uploads%2Fphoto.jpg?alt=media&token=ec74a6d8-04cc-4aad-8ccc-5e0ba53cbd5f"}}
      source={{ uri: url }}
    />
  );
}

export default ProfileImage;