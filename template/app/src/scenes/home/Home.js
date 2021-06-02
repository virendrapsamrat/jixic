//define routes here for react-navigationimport React from 'react';
import React, {useState} from 'react';
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Welcome to Home Screen!</Text>
    </View>
  );
}

export default Home;