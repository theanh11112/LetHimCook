import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import Header from './header';

import IngredientList from './IngredientList';
import RecipeList from './RecipeList';
import tw from 'twrnc';
import SearchController from '@/controllers/SearchRecipe';
import BottomTabNavigator from '@/navigation/BottomTabNavigator';
const HomeScreen = () => {
  return (
    <FlatList style={tw`flex-1 bg-white px-2`}
      ListHeaderComponent={
        <>
          <View style={tw`flex-row `}>
            <Header />
            <Text style={tw` text-black text-2xl p-2 items-center mt-2`}>Tìm kiếm</Text>
            <Text style={tw`text-xl p-2 mt-3 ml-auto`}>🔔</Text>
          </View>

          <SearchController />
          <Text style={tw`text-xl m-2 `}>Nguyên Liệu Phổ Biến</Text>
          <IngredientList />
          <Text style={tw`mt-2 text-xl`}>Món ăn mới lên sóng</Text>
          <RecipeList/>
        </>
      }
      data={[]} 
      renderItem={null} 
      keyExtractor={(_, index) => index.toString()}
    />
  );
};



export default HomeScreen;
