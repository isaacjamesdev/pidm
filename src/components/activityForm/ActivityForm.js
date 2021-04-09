import React, { useState, useCallback, useEffect } from "react";
import DefaultContainer from "../defaultContainer/DefaultContainer";
import Title from "../title";
import TextInput from "../TextInput";
import Button from "../button";
import { editActivity } from "../../hooks/Activities";

const ActivityForm = ({activity}) => {
  const [newActivity, setNewActivity] = useState({});

  useEffect(()=>{
    setNewActivity(activity)
  }, [])

  const setField = useCallback((field, value) => {
    setNewActivity(oldState => ({
      ...oldState,
      [field]: value,
      sent: true
    }), [newActivity])
  });

  return (
    <DefaultContainer>
      <Title>Editar atividade</Title>
      <TextInput
        placeholder="category"
        value={newActivity.category}
        onChangeText={value => setField("category", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="description"
        value={newActivity.description}
        onChangeText={value => setField("description", value)}
      />
      <TextInput
        placeholder="Horas reais"
        value={newActivity.hr}
        onChangeText={value => setField("hr", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Horas convertidas"
        value={newActivity.hc}
        onChangeText={value => setField("hc", value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Submetido"
        value={newActivity.sent}
        onChangeText={value => setField("sent", value)}
      />

      <Button
        title="Salvar"
        onPress={() => editActivity(newActivity)}
        primary
      />
    </DefaultContainer>
  );
}

export default ActivityForm;