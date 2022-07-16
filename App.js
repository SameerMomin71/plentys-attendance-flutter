import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen from './src/route/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

const Screen = () => {
  return (
    <Stack.Navigator>
      {StackScreen.map((item, index) => {
        return (
          <Stack.Screen
            key={item.Screen + index}
            name={item.Screen}
            component={item.Conponent}
            options={item.Options}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Screen />
    </NavigationContainer>
  );
}
