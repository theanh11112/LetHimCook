import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import tw from 'twrnc';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  // Add other routes here if needed
};

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin!');
    } else {
      Alert.alert('Đăng ký thành công!', `Chào mừng ${name}`);
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-white px-5`}>
      <Image
        source={require('../Img/pen.png')}
        style={tw`w-40 h-40 mb-5`}
      />

      <Text style={tw`text-2xl font-bold text-orange-400 mb-8`}>
        Đăng ký tài khoản
      </Text>

      <TextInput
        style={tw`w-full border-2 border-gray-300 rounded-lg p-3 text-base mb-4`}
        placeholder="Tên của bạn"
        value={name}
        onChangeText={setName}
        placeholderTextColor="gray"
      />

      <TextInput
        style={tw`w-full border-2 border-gray-300 rounded-lg p-3 text-base mb-4`}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="gray"
      />

      <TextInput
        style={tw`w-full border-2 border-gray-300 rounded-lg p-3 text-base mb-4`}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="gray"
      />

      <TouchableOpacity
        style={tw`w-full bg-orange-400 py-4 rounded-lg mb-5 items-center`}
        onPress={handleSignUp}
      >
        <Text style={tw`text-white text-lg font-bold`}>Đăng ký</Text>
      </TouchableOpacity>

      <Text style={tw`text-gray-600`}>
        Bạn đã có tài khoản?{' '}
        <Text
          style={tw`text-orange-500 font-bold`}
          onPress={() => navigation.navigate('Login')}  // Chuyển đến trang Login
        >
          Đăng nhập
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;
