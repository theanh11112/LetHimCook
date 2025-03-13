import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Header from './header';
import SearchBar from './SearchBar';
import IngredientList from './IngredientList';
import RecipeList from './RecipeList';
import tw from 'twrnc';



const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View  style={tw`flex-row items-center`}>
      <Header/>
      <SearchBar/>
     </View>

      <Text style={tw.style('text-20px m-10px')}>Mục Lục</Text>
      <IngredientList />

      <Text style={tw.style('mt-20px text-20px')}>Món ăn mới lên sóng</Text>
      <RecipeList />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
