import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';
import OnboardingUI from '../screens/OnboardingUI';
import RestaurantScreen from '../screens/RestaurantScreen';
import ScanScreen from '../screens/ScanScreen';

const Stack = createStackNavigator();

const ScanNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="ScanScreen" component={ScanScreen}options={{headerShown: false}}/>
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} options={{headerShown: false}} />
    </Stack.Navigator>
)

export default ScanNavigator;