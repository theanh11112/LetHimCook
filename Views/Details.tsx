import React from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import Header from './header';
//  import SearchBar from './SearchBar';
import SearchController from '@/controllers/RecipeList';


type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
  
const Details = ({ route }: { route: DetailsScreenRouteProp }) => {
  const { recipe } = route.params;
  const navigation = useNavigation();

  return (
    <>
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
       
      
    <ScrollView style={tw` bg-white`}>
        <Image source={typeof recipe.image === 'string' ? { uri: recipe.image } : recipe.image} style={tw`w-full h-68 my-2 rounded-lg `} />
        <Text style={tw`text-2xl font-bold px-3`}>Tên món ăn: {recipe.name}</Text>
        <Text style={tw`text-lg px-3`}>Author: {recipe.author}</Text>
        <Text style={tw`h-8 w- border rounded-lg px-3 mt-2 mb-5 bg-gray-100 text-sm text-center p-1`}>🕒 15 phút</Text>
        <FlatList
          data={recipe.ingredients}
          keyExtractor={(_, index) => index.toString()}
          nestedScrollEnabled={true}
          ListHeaderComponent={<Text style={tw`text-2xl font-bold px-3 mb-2`}>Nguyên Liệu</Text>}
          renderItem={({ item }) => (
            <View style={tw`flex m-1 p-2`}>
              <Text style={tw`text-lg font-bold`}>• {item}</Text>
            </View>
          )} />
        <View>
          <Text style={tw`text-black text-l mr-2 px-2`}>Bày tỏ cảm xúc của bạn</Text>
           <View style={tw`flex-row px-4 mb-4`}>
            <TouchableOpacity style={tw`flex-row items-center`}>
              <Text style={tw`text-black text-xl mr-2`}>❤️</Text>
              <Text style={tw`text-black`}>1</Text>
            </TouchableOpacity>
            </View>
          </View>
        <View style={tw`px-4 my-4 items-center`}>
         
          <TouchableOpacity style={tw`bg-white-300 border p-3 rounded-lg mb-3`}>
            <Text style={tw`text-black text-center`}>Gửi cooksnap đầu tiên mở hàng!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-white-300 border p-3 rounded-lg mb-3 flex-row items-center justify-center`}>
            <Text style={tw`text-black`}>🔔 Thêm vào Hôm Nay</Text>
          </TouchableOpacity>
          <Text style={tw`text-black text-center mb-3`}>ID Công thức: {recipe.id} </Text>
          <Text style={tw`text-black text-center mb-3`}>Lên sóng vào ngày 22 tháng 3, 2025</Text>
          <View style={tw`flex-row items-center justify-center mb-4`}>
          
            <Text style={tw`text-black`}>Lên sóng bởi : {recipe.author}</Text>
          </View>
          <TouchableOpacity style={tw`bg-white-300 border h-10 items-center justify-center w-50  p-2 rounded-lg`}>
            <Text style={tw`text-black  text-center`}>Kết bạn bếp</Text>
          </TouchableOpacity>
 
          <View style={tw`border-t w-full border-gray-500 pt-4 mt-10`}>
          <Text style={tw`text-black text-l mr-2 px-2 mt-3 mb-2`}>💬 Bình Luận</Text>
            <View style={tw`flex-row items-center mb-4 bg-gray-100 rounded-full px-2 py-1`}>
              <Header></Header>
            <TextInput placeholder="Thêm bình luận..." placeholderTextColor="black" style={tw`text-black flex-1 p-2`} />
            </View>
          </View>
        </View>
        <Text style={tw`text-black px-2 text-2xl`}>Các món có nguyên liệu tương tự</Text>
      </ScrollView></>
  );
};

export default Details;
