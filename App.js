import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes'
import { AuthProvider} from './src/hooks/useAuth';

export default () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);
