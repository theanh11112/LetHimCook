// /**
//  * The SearchBar component in this TypeScript React code allows users to search for food items and
//  * displays search results with loading indicators.
//  * @returns The `SearchBar` component is being returned. It consists of a view containing a text input
//  * for searching, an activity indicator for loading state, and a flat list for displaying search
//  * results. The search results are rendered as a list of items with meal names. If there are no search
//  * results matching the input text, a message "Không tìm thấy kết quả" is displayed
//  */
// // import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

// import tw from 'twrnc';

// const SearchBar = () => {
//   const [searchText, setSearchText] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [searchResults, setSearchResults] = useState<any[]>([]);

//   return (
//     <View style={tw`flex-1 p-1`}>
//     <TextInput
//       placeholder="Nhập món ăn cần tìm..."
//       placeholderTextColor="gray"
//       style={tw`h-7 border rounded-xl px-2 bg-gray-50 text-xs leading-none py-0`}
      
//       value={searchText}
//     />
//       {loading ? (
//         <ActivityIndicator size="large" color="blue" style={tw`mt-4`} />
//       ) : searchResults.length > 0 ? (
//         <FlatList
//           data={searchResults}
//           keyExtractor={(item) => item.idMeal}
//            nestedScrollEnabled={true}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={tw`p-4 border-b border-gray-300`}>
//               <Text style={tw`text-lg font-bold`}>{item.strMeal}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       ) : (
//         searchText !== '' && <Text style={tw`text-center text-lg text-gray-500`}>Không tìm thấy kết quả</Text>
//       )}
//     </View>
//   );
// };

// export default SearchBar;
