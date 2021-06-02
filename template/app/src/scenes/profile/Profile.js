//define routes here for react-navigationimport React from 'react';
import React, {useState} from 'react';
import { Text, View } from 'react-native';

const Profile = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text> Welcome to Profile!</Text>
    </View>
  );
}

export default Profile;