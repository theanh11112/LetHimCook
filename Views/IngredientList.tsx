import React from 'react';
import { View, Text, Image, FlatList, Dimensions } from 'react-native';
import { ingredients } from '../models/ingredientsData';
import tw from 'twrnc';

const { width } = Dimensions.get('window');

const IngredientList = () => {
  return (
    <FlatList
      style={tw`flex-1 bg-white rounded-lg`}
      data={ingredients}
      keyExtractor={(item) => item.id}
      nestedScrollEnabled={true}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={tw`w-[${width / 2 - 22}px] items-center m-1.5`}>
          <View style={tw`relative rounded-lg overflow-hidden`}>
            <Image source={item.image} style={tw`w-47 h-33 rounded-lg`} />
            <Text style={tw`absolute bottom-0 left-0  text-white text-base font-bold p-1 w-full p-2 text-left`}>
              {item.name}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

export default IngredientList;
