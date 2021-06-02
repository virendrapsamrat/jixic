//define routes here for react-navigationimport React from 'react';
import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
        // write your functions    
        console.log('88888')
        this.props.navigation.navigate('MainNavigator')
     }, 1000);
  }

  render() {
    return (
      <>
       <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        background:'lightGreen'
      }}>
           <Text>SplashScreen</Text>
       </View>
      </>
    );
  }
}

export default SplashScreen;