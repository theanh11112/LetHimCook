import React from 'react';
import AppNavigator from './navigation/BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeList from './Views/RecipeList';
import Details from './Views/Details';



export type RootStackParamList = {
  RecipeList: undefined;
  Details: { recipe: { id: string; name: string; image: any; author: string } };
  BottomTabNavigator: undefined;  
  Drawer: undefined;  
  
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (     
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name ="BottomTabNavigator" component={AppNavigator} />
      <Stack.Screen name="RecipeList" component={RecipeList} options={{ title: 'Danh Sách Món Ăn' }} />
      {/* <Stack.Screen name="Details" component={Details} options={{ title: 'Chi Tiết Món Ăn' }} /> */}
    </Stack.Navigator>
  );
};

export default App;
