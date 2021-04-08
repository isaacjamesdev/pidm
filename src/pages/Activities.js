import React, {useState, useEffect} from 'react';
import Card from '../components/card/Card';
import DefaultContainer from '../components/defaultContainer/DefaultContainer';
import Title from '../components/title';
import Button from '../components/button';
import { getActivities, setActivity } from '../hooks/Activities';
import Loading from '../components/loading/Loading';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getActivities().then(data => {
      setActivities(data);
    }).finally(()=>{
      setLoading(false);
    })
  }, [])
  
  return (
    <DefaultContainer>
        <Title>Activities</Title>
        {loading ? <Loading /> : <Card activities={activities}/>}
        <Button 
          title="Get"
          onPress={getActivities}
        />
        <Button 
          title="Set"
          onPress={()=> {
            setActivity(activities[1])
            console.log("SET")
  
          }}
        />
    </DefaultContainer>
  );
}

export default Activities;