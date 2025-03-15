import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeList from '../Views/RecipeList';
import Details from '../Views/Details';

export type RootStackParamList = {
  RecipeList: undefined;
  Details: { recipe: { id: string; name: string; image: any; author: string; ingredients: string[] } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Dh = () => {
  return (
    <Stack.Navigator initialRouteName="RecipeList" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RecipeList" component={RecipeList} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Dh;