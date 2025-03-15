import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import tw from 'twrnc';
import { RouteProp } from '@react-navigation/native';

// Định nghĩa kiểu dữ liệu cho params
type RootStackParamList = {
  Details: { recipe: { name: string; author: string; image: string | any; ingredients: string[] } };
};

// Định nghĩa kiểu cho route
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const Details = ({ route }: { route: DetailsScreenRouteProp }) => {
  const { recipe } = route.params;

  return (
    <View style={tw`flex-1 bg-white`}>
      <Image source={typeof recipe.image === 'string' ? { uri: recipe.image } : recipe.image} style={tw`w-full h-68 my-2 rounded-lg`} />
      <Text style={tw`text-2xl font-bold px-3`}>Tên món ăn: {recipe.name}</Text>
      <Text style={tw`text-lg px-3`}>Author: {recipe.author}</Text>
      <Text style={tw`h-8 w-full border rounded-lg px-3 mt-2 mb-5 bg-gray-100 text-sm text-center p-1`}>🕒 15 phút</Text>

      <FlatList
        data={recipe.ingredients}
        keyExtractor={(_, index) => index.toString()}
        nestedScrollEnabled={true}
        ListHeaderComponent={<Text style={tw`text-2xl font-bold px-3 mb-2`}>Nguyên Liệu</Text>}
        renderItem={({ item }) => (
          <View style={tw`flex m-1 p-2`}>
            <Text style={tw`text-lg font-bold`}>• {item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Details;
