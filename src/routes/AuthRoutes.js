import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../pages/signUp';
import SignIn from '../pages/SignIn';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="SignIn"
          component={SignIn}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;