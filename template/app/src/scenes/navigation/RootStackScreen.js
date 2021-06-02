/**
 * Root Stack Screen
 */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../splash/SplashScreen';
import Login from '../auth/Login';
import R from '../../R';
import BottomStack from './BottomStack'
const RootStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Login" component={Login} />
    </RootStack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <RootStack.Navigator>

      <RootStack.Screen
        name="title"
        component={BottomStack}
        options={{ headerShown: true }}
      />
    </RootStack.Navigator>
  );
};
const RootStackScreen = (props) => {
  return (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="MainNavigator" component={MainNavigator} />
      {/* <RootStack.Screen name="AuthNavigator" component={AuthNavigator} /> */}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;