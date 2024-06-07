import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Registro from './Registro';
import MyTabs from './MyTabs';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen
        name="Infos"
        component={MyTabs}
      />
    </Stack.Navigator>
  );
}
