import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image , Text} from 'react-native';
import R from '../../R';
import Details from '../details/Details';
import Home from '../home/Home';
import Explore from '../explore/Explore';
import Profile from '../profile/Profile';
import scale, { verticalScale } from '../../../res/Scale';

import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
     <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'red',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarLabel: 'Details',
          tabBarBadge: 3,
        }}
      />
       <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}