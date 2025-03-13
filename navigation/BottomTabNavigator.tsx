import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from '../Views/HomeScreen'; 
import RecipeScreen from '../Views/RecipeList'; 


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'ellipse-outline';

          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Kho món ngon') {
            iconName = focused ? 'book' : 'book-outline';
          } 

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: { height: 55, paddingBottom: 5 },
      })}
    >
      
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Kho món ngon" component={RecipeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
