import React, { useState, useCallback } from "react";
import DefaultContainer from "../components/defaultContainer/DefaultContainer";
import Title from "../components/title";
import TextInput from "../components/TextInput";
import Button from "../components/button";
import { setActivity } from "../hooks/Activities";

const RegisterActivity = () => {
  const [activity, setActivityForm] = useState({});

  const setField = useCallback((field, value) => {
    setActivityForm(oldState => ({
      ...oldState,
      [field]: value,
      sent: true
    }), [activity])
  });

  return (
    <DefaultContainer>
      <Title>Cadastrar</Title>
      <TextInput
        placeholder="category"
        value={activity.category}
        onChangeText={value => setField("category", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="description"
        value={activity.description}
        onChangeText={value => setField("description", value)}
      />
      <TextInput
        placeholder="Horas reais"
        value={activity.hr}
        onChangeText={value => setField("hr", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Horas convertidas"
        value={activity.hc}
        onChangeText={value => setField("hc", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Submetido"
        value={activity.sent}
        onChangeText={value => setField("sent", value)}
      />

      <Button
        title="Cadastrar"
        onPress={() => setActivity(activity)}
        primary
      />
    </DefaultContainer>
  );
}

export default RegisterActivity;