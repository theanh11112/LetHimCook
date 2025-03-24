import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import tw from 'twrnc';
import { RootStackParamList } from '@/types';
import Header from './header';
import SearchController from '@/controllers/SearchRecipe';
import axios from 'axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const API_BASE_URL = 'http://localhost:3000/api';

// Định nghĩa kiểu dữ liệu cho route
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const Details: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { recipe } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [loading, setLoading] = useState(false);
  const [similarRecipes, setSimilarRecipes] = useState<{ _id: string; name: string; ingredients: string[]; author: string; image: string; steps: string[] }[]>([]);

  useEffect(() => {
    fetchSimilarRecipes();
  }, []);
  const fetchSimilarRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/recipes`);
      const filteredRecipes = response.data.filter(
        (item: { _id: string; name: string; ingredients: any[]; author: string; image: string; steps: string[] }) =>
          item._id !== recipe._id && item.ingredients.some(ing => recipe.ingredients.includes(ing))
      );
      setSimilarRecipes(filteredRecipes);
    } catch (error) {
      console.error("Lỗi khi lấy công thức tương tự:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteRecipe = async (id: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/recipes/${id}`);
      alert('Xóa công thức thành công!');
      navigation.goBack();
    } catch (error) {
      console.error("Lỗi khi xóa công thức:", error);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="blue" />;

  return (
    <>
      {/* Header */}
      <View style={tw`flex flex-row justify-between items-center bg-white px-3 py-2`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={tw`text-lg`}>← </Text>
        </TouchableOpacity>
        <Header />
        <SearchController />
        <View style={tw`flex-row items-center gap-4`}>
          <TouchableOpacity><Text style={tw`text-lg`}>🔖</Text></TouchableOpacity>
          <TouchableOpacity><Text style={tw`text-lg`}>•••</Text></TouchableOpacity>
        </View>
      </View>

      <ScrollView style={tw`bg-white`}>
        {/* Hình ảnh và thông tin cơ bản */}
        <Image source={{ uri: recipe.image }} style={tw`w-full h-64 my-2 rounded-lg`} />
        <Text style={tw`text-2xl font-bold px-3 mt-2`}>Tên món ăn: {recipe.name}</Text>
        <Text style={tw`text-lg px-3 mb-2`}>Tác giả: {recipe.author}</Text>
      
        <Text style={tw`h-8 w-auto border rounded-lg px-3 mt-2 mb-5 bg-gray-100 text-sm text-center p-1`}>🕒 15 phút</Text>
       
        <Text style={tw`text-xl font-bold px-3 mt-3 mb-3`}>🛒 Nguyên liệu</Text>
        <FlatList
          data={recipe.ingredients}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={tw`px-3 text-xl border-b-2 border-dashed border-orange-400 w-1/2`}>• {item}</Text>
          )}
        />

        {/* Cách làm */}
        <Text style={tw`text-xl font-bold px-3 mt-3`}>🍳 Các bước nấu món </Text>
        <FlatList
          data={recipe.steps}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={tw`flex-row items-center`}>
              <View style={tw`w-8 h-8 bg-orange-300 rounded-full justify-center items-center mt-3`}>
                <Text style={tw`text-lg font-bold`}>{index + 1}</Text>
              </View>
              <Text style={tw`px-3 text-2xl`}>{item}</Text>
            </View>
          )}
        />

        {/* Các món có nguyên liệu tương tự */}
        <Text style={tw`text-xl font-bold px-3 mt-5 mb-2`}>Các món có nguyên liệu tương tự</Text>
        {similarRecipes.length === 0 ? (
          <Text style={tw`px-3  text-gray-500`}>Không tìm thấy công thức tương tự.</Text>
        ) : (
          <FlatList
            data={similarRecipes}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', { recipe: { ...item, id: Number(item._id) } })}
              >
                <Text style={tw`px-2 text-xl `}>• {item.name}</Text>
                <Text style={tw`px-2 text-xxl `}>Nguyên liệu: {item.ingredients.join(', ')}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>
    </>
  );
};

export default Details;
