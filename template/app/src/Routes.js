//define routes here for react-navigationimport React from 'react';
import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import RootStackScreen from './scenes/navigation/RootStackScreen';

const Routes = () => {
  return (
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
  );
}

export default Routes;