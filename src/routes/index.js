import React from 'react';
import { useAuth } from '../hooks/useAuth';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

const Routes = () => {
  // const { token } = useAuth();
  // const token = true;
  const token = false;

  return token ?
    <AppRoutes />
    :
    <AuthRoutes />
};

export default Routes;