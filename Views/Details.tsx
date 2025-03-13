import React from 'react';
import { View, ScrollView, Image, Text, FlatList, Dimensions, Button, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './header';
import SearchBar from './SearchBar';
interface Recipe {
  id: string;
  name: string;
  image: any;
  author: string;
  steps: string[];
  ingredients: string[];
}

type RootStackParamList = {
  RecipeList: undefined;
  Details: { recipe: Recipe };
};

const { width } = Dimensions.get('window');

const Details: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const { recipe } = route.params;

  return (
    
    <ScrollView style={tw`flex-1 bg-white px-2`} nestedScrollEnabled={true}>
     <View  style={tw`flex-row items-center`}>
      <Header/>
      <SearchBar/>
     </View>
      <Image source={recipe.image} style={tw`w-full h-68 my-2 rounded-lg`} />
      <Text style={tw`text-2xl font-bold px-3`}>Tên món ăn: {recipe.name}</Text>
      <Text style={tw`text-ll  px-3`}> Author: {recipe.author}</Text>
      <Text style={tw`h-8 w-full border rounded-lg px-3 mt-2 mb-5 bg-gray-100 text-sm item-center text-center p-1`}>🕒15phút
      </Text>
      <Text style={tw`text-2xl font-bold px-3 mb-2`}>Nguyên Liệu</Text>
          <FlatList
            data={recipe.ingredients}
            keyExtractor={(_, index) => index.toString()}
            nestedScrollEnabled={true}
            renderItem={({ item }) => (
              <View style={tw`flex m-1 p-2`}>
                <Text style={tw` text-lg font-bold`}>• {item}</Text>
              </View>
            )}
            
          />
      <Text style={tw`text-2xl font-bold px-3 mb-2`}>Cách làm </Text>
      <FlatList
        data={recipe.steps} 
        keyExtractor={(_, index) => index.toString()}
        nestedScrollEnabled={true}
        renderItem={({ item, index }) => (
          <View style={tw`flex-row items-start px-3 py-2`}>
            <Text style={tw`text-xl font-bold mr-2`}>{index + 1}.</Text>
            <Text style={tw`text-lg flex-1`}>{item}</Text>
          </View>
        )}
      />
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity style={tw`h-10 w-70 border rounded-lg bg-gray-100 flex items-center justify-center mt-2 mb-5`}>
        <Text style={tw`text-sm text-black`}>Thêm vào hôm nay</Text>
        </TouchableOpacity>
        <Icon style={tw`ml-3 p-3 mb-3`} name="bookmark-o" size={35} color="black" />
      </View>
      
    </ScrollView>
  );
};

export default Details;

