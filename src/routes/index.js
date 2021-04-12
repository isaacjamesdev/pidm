import React from 'react';
import { useAuth } from '../hooks/useAuth';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';
import { NavigationContainer } from '@react-navigation/native';
const Routes = () => {
  const { authenticated } = useAuth();
  return (
    <NavigationContainer>
      {/* {authenticated ?
        <AppRoutes />
        :
        <AuthRoutes />
      } */}
      <AuthRoutes />
    )

  </NavigationContainer>
  )
};

export default Routes;