import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchSearchResults } from '../controllers/SearchController';
import tw from 'twrnc';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (text: string) => {
    setSearchText(text);
    setLoading(true);
    const results = await fetchSearchResults(text);
    setSearchResults(results);
    setLoading(false);
  };

  return (
    <View style={tw`flex-1 p-1`}>
    <TextInput
      placeholder="Nhập món ăn cần tìm..."
      placeholderTextColor="gray"
      style={tw`h-7 border rounded-xl px-2 bg-gray-50 text-xs leading-none py-0`}
      onChangeText={handleSearch}
      value={searchText}
    />
      {loading ? (
        <ActivityIndicator size="large" color="blue" style={tw`mt-4`} />
      ) : searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.idMeal}
           nestedScrollEnabled={true}
          renderItem={({ item }) => (
            <TouchableOpacity style={tw`p-4 border-b border-gray-300`}>
              <Text style={tw`text-lg font-bold`}>{item.strMeal}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        searchText !== '' && <Text style={tw`text-center text-lg text-gray-500`}>Không tìm thấy kết quả</Text>
      )}
    </View>
  );
};

export default SearchBar;
