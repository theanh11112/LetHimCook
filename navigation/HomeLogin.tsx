import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../Views/SignUp';
import LoginScreen from '../Views/Login';
import HomeScreen from '../Views/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeLogin = () => {
  return (     
    <Stack.Navigator 
    initialRouteName="HomeScreen" 
    screenOptions={{ headerShown: false }}
  >
      <Stack.Screen name="Login" component={LoginScreen} /> 
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
    </Stack.Navigator>
  );
};

export default HomeLogin;
