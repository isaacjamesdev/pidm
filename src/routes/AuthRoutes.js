import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../pages/signUp';
import SignIn from '../pages/SignIn';
import AppRoutes from './AppRoutes';
import ActivityForm from '../pages/EditActivity';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
      />
      <AuthStack.Screen
        name="AppRoutes"
        component={AppRoutes}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
      />
      <AuthStack.Screen
        name="EditActivity"
        component={ActivityForm}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;