import React from 'react';
import AuthRoutes from './AuthRoutes';
import { NavigationContainer } from '@react-navigation/native';
const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
  </NavigationContainer>
  )
};

export default Routes;