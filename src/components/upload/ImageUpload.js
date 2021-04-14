import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import Button from '../button';
import { useAuth } from '../../hooks/useAuth';


const FirebaseStorageUploader = () => {
  const { user } = useAuth();
  const uriToBlob = (uri) => {

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        // return the blob
        resolve(xhr.response);
      };

      xhr.onerror = function () {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };

      // this helps us get a blob
      xhr.responseType = 'blob';

      xhr.open('GET', uri, true);
      xhr.send(null);

    });

  }

  const uploadToFirebase = (blob) => {

    return new Promise((resolve, reject) => {

      var storageRef = firebase.storage().ref();

      storageRef.child(`uploads/${user.matricula}.jpg`).put(blob, {
        contentType: 'image/jpeg'
      }).then((snapshot) => {
        console.log("TESTES", snapshot);
        blob.close();

        resolve(snapshot);

      }).catch((error) => {

        reject(error);

      });

    });


  }


  const handleOnPress = () => {

    ImagePicker.launchImageLibraryAsync({
      mediaTypes: "Images"
    }).then((result) => {

      if (!result.cancelled) {
        // User picked an image
        const { height, width, type, uri } = result;
        return uriToBlob(uri);

      }

    }).then((blob) => {

      return uploadToFirebase(blob);

    }).then((snapshot) => {

      console.log("File uploaded", snapshot);

    }).catch((error) => {

      throw error;

    });

  }

  return (

    <Button
      title="Choose Photo"
      onPress={handleOnPress}
    />
  )

}

export default FirebaseStorageUploader;