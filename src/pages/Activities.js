import React, { useState, useEffect } from 'react';
import Card from '../components/card/Card';
import DefaultContainer from '../components/defaultContainer/DefaultContainer';
import Title from '../components/title';
import Button from '../components/button';
import { getActivities } from '../hooks/useActivities';
import Loading from '../components/loading';
import { useAuth } from '../hooks/useAuth';


const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const refresh = ()=>{
    setLoading(true)
    getActivities(user.matricula).then(data => {
      setActivities(data);
    }).finally(() => {
      setLoading(false);
    })
  }
  
  useEffect(() => {
    refresh();
  }, [])

  return (
    <DefaultContainer>
      <Title>Activities</Title>
      <Button
        title="Atualizar"
        onPress={refresh}
      />
      {loading ? <Loading /> : <Card activities={activities} />}
    </DefaultContainer>
  );
}

export default Activities;