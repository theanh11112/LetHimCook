import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';
import { getRecipes, searchRecipes, Recipe } from '../models/RecipeController';
import Header from './header';
import SearchController from '@/controllers/RecipeList';
import { useNavigation } from '@react-navigation/native';

const SearchView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>(getRecipes());

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    setRecipes(searchRecipes(query));
  };

  const showDetail = (recipe: Recipe) => {
    Alert.alert(
      recipe.title,
      `Mô tả: ${recipe.description}\nTác giả: ${recipe.author}`,
      [{ text: 'Đóng' }]
    );
  };
   const navigation = useNavigation();
  return (
    <View style={tw`flex-1 `}>
       <View style={tw`flex flex-row justify-center items-center bg-white px-[10px]`}>  
          <TouchableOpacity style={tw`p-2`}>
            <Text style={tw`text-lg`} onPress={() => navigation.goBack()}>←</Text>
          </TouchableOpacity>
          <Header></Header>
          <SearchController />
          <View style={tw`flex-row items-center gap-4`}>
          <TouchableOpacity><Text style={tw`text-lg`}>🔖</Text></TouchableOpacity>
            <TouchableOpacity>
              <Text style={tw`text-lg`}>•••</Text>
            </TouchableOpacity>
          </View>
      </View>
      
      <ScrollView style={tw`bg-orange-50`}>
        <Text style={tw` text-black text-2xl p-2`}>Món mới nhất</Text>
        {recipes.map(recipe => (
          <TouchableOpacity
            key={recipe.id}
            style={tw`flex-row bg-white shadow-md rounded-lg my-1 overflow-hidden`}
            onPress={() => showDetail(recipe)}
          >
            <Image source={typeof recipe.image === 'string' ? { uri: recipe.image } : recipe.image} style={tw`w-40 h-30 my-2 rounded-lg px-1 `} />
            <View style={tw`flex-1 p-3`}>
              <Text style={tw`text-lg font-bold`}>{recipe.title}</Text>
              <Text style={tw`text-gray-500 mt-1`} numberOfLines={2}>
                {recipe.description}
              </Text>
              <Text style={tw`text-orange-500 mt-2`}>👩‍🍳 {recipe.author}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchView;
