import React from 'react';
import Card from '../components/card/Card';
import DefaultContainer from '../components/defaultContainer/DefaultContainer';
import Title from '../components/title';

const activities = [
  {
    description: "Egua",
    category: "3",
    hr: "34",
    hc: "32",
    sent: true
  },
  {
    description: "sapoha",
    category: "1",
    hr: "20",
    hc: "12",
    sent: true
  },
]

const Activities = () => (
  <DefaultContainer>
      <Title>Activities</Title>
      <Card activities={activities}/>
  </DefaultContainer>
);

export default Activities;