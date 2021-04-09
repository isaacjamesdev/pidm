import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';
import Activities from '../pages/Activities';
import Profile from '../pages/Profile';
import RegisterActivity from '../pages/RegisterActivity';
import EditActivity from '../pages/EditActivity';

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#bfbfbf',
    text: '#bfbfbf',
    background: '#151b1e',
    card: '#151b1e',
  },
};

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();


const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Atividades"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen
          name="Atividades"
          component={Activities}
          options={{
            tabBarLabel: 'Atividades',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="format-list-checkbox" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Cadastrar"
          component={RegisterActivity}
          options={{
            tabBarLabel: 'Cadastrar',
            tabBarIcon: ({ color }) => (
              <AntDesign name="pluscircleo" color={color} size={23} />
            ),
          }}
        />
        <Tab.Screen
          name="Editar"
          component={EditActivity}
          options={{
            tabBarLabel: 'Editar',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="pencil" color={color} size={23} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;