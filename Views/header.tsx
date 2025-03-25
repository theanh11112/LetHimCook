import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const Header = () => {
  const navigation = useNavigation(); // Lấy navigation để điều hướng

  return (
    <View style={tw``}>
      <TouchableOpacity >
        <Image source={require('../Img/logo.png')} style={tw`w-[50px] h-[50px]`} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
