import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { recipes } from '../models/RecipeModel';
import tw from 'twrnc';
import { RootStackParamList } from '../App'; 

const RecipeList: React.FC = () => {
 
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'RecipeList'>>();

  return (
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.id}
      horizontal
      nestedScrollEnabled={true}
      renderItem={({ item }) => (
        <View style={tw`m-2 items-center`}>
          <TouchableOpacity onPress={() => navigation.navigate('Details', { recipe: item })}>
            <Image source={item.image} style={tw`w-24 h-24 rounded-lg`} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Details', { recipe: item })}>
            <Text style={tw`text-base font-semibold mt-1`}>{item.name}</Text>
          </TouchableOpacity>
          <Text style={tw`text-xs text-gray-500`}>{item.author}</Text>
          <Text>231232</Text>
        </View>
      )}
    />
  );
};


export default RecipeList;
