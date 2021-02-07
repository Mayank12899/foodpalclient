
import React from 'react';
import {
  View, Text
} from 'react-native';
import Login from './app/screens/LoginScreen';

import {NavigationContainer} from '@react-navigation/native';
// import Signup from './app/screens/signup';
import AuthNavigator from './app/navigator/authNavigator';
export default function App() {

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

