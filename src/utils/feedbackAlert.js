import {Alert } from "react-native";
export function feedBackAlert(title, msg, fn) {
  Alert.alert(
    title,
    msg,
    [
      { text: "OK", onPress: fn }
    ]
  );
}