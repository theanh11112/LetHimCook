import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const ProfileScreen = () => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Text style={tw`text-xl font-bold`}>Hồ Sơ Cá Nhân</Text>
      <Text style={tw`text-gray-500`}>Thông tin của bạn sẽ hiển thị ở đây.</Text>
    </View>
  );
};

export default ProfileScreen;
