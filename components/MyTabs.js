import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Info from './Info';
import ToDo from './ToDo';
import React from 'react';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Infos"
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          height: 80, 
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerShown: false, 
      }}
    >
      <Tab.Screen
        name="Infos"
        component={Info}
      />
      <Tab.Screen
        name="ToDo"
        component={ToDo}
      />
    </Tab.Navigator>
  );
}
