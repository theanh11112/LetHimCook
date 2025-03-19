import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import Header from './header';
//  import SearchBar from './SearchBar';
import IngredientList from './IngredientList';
import RecipeList from './RecipeList';
import tw from 'twrnc';
import SearchController from '@/controllers/RecipeList';

const HomeScreen = () => {
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={tw`flex-row items-center`}>
            <Header />
            {/* <SearchBar /> */}
          </View>
          <Text style={tw`text-xl m-2`}>Mục Lục</Text>
          <IngredientList />
          <Text style={tw`mt-2 text-xl`}>Món ăn mới lên sóng</Text>
          <SearchController></SearchController>
        </>
      }
      data={[]} // FlatList cần data, nhưng ở đây không cần nên truyền mảng rỗng
      renderItem={null} // Không hiển thị item nào vì phần trên đã đủ nội dung
      keyExtractor={(_, index) => index.toString()}
      style={styles.container}
    />
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
