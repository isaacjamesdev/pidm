import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';
import Activities from '../pages/Activities';
import Profile from '../pages/Profile';
import RegisterActivity from '../pages/RegisterActivity';
import EditActivity from '../pages/EditActivity';

const Tab = createMaterialBottomTabNavigator();

const AppRoutes = () => {
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

export default AppRoutes;