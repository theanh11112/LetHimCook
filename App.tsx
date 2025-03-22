import React from 'react';
import AppNavigator from './navigation/BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeList from './Views/RecipeList';
import Details from './Views/Details';
import { RouteProp } from '@react-navigation/native';
import SignUpScreen from './Views/SignUp';
import LoginScreen from './Views/Login';



export type RootStackParamList = {
  RecipeList: undefined;
  Details: { recipe: {
    ingredients: ArrayLike<any> | null | undefined; id: string; name: string; image: any; author: string 
} };
  BottomTabNavigator: undefined;  
  Drawer: undefined;  
  SignUp: undefined;
  Login: undefined;
  
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (     
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name ="BottomTabNavigator" component={AppNavigator} />
      <Stack.Screen name="RecipeList" component={RecipeList} options={{ title: 'Danh Sách Món Ăn' }} />
      <Stack.Screen name="Details" component={Details} options={{ title: 'Chi Tiết Món Ăn' }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default App;
