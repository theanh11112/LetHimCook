import React, { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import tw from 'twrnc';

type RootStackParamList = {
  SignUp: undefined;
};

const App = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ email và mật khẩu.');
    } else {
      Alert.alert('Đăng nhập thành công', `Chào mừng trở lại, ${email}!`);
    }
  };

  const handleSignUp = () => {
    Alert.alert('Đăng ký', 'Chuyển đến trang đăng ký');
  };
  // Removed duplicate declaration of navigation

  return (
    <View style={tw`flex-1 justify-center items-center bg-white px-5`}>
      {/* Logo */}
      <Image
        source={require('../Img/pen.png')}
        style={tw`w-40 h-40 mb-5`}
      />

      {/* Tiêu đề */}
      <Text style={tw`text-2xl font-bold text-orange-600 mb-8`}>
        Chào mừng quay lại!
      </Text>

      {/* Input Email */}
      <TextInput
        style={tw`w-full border-2 border-gray-300 rounded-lg p-3 text-base mb-4`}
        placeholder="Nhập email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Input Password */}
      <TextInput
        style={tw`w-full border-2 border-gray-300 rounded-lg p-3 text-base mb-4`}
        placeholder="Nhập mật khẩu"
        placeholderTextColor="gray"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Quên mật khẩu */}
      <TouchableOpacity>
        <Text style={tw`text-orange-600 self-end mb-6`}>
          Quên mật khẩu?
        </Text>
      </TouchableOpacity>

      {/* Nút Đăng nhập */}
      <TouchableOpacity
        style={tw`w-full bg-orange-400 py-4 rounded-lg mb-5 items-center`}
        onPress={handleLogin}
      >
        <Text style={tw`text-white text-lg font-bold`}>Đăng Nhập</Text>
      </TouchableOpacity>

      {/* Đăng ký */}
      <Text style={tw`text-gray-600 flex-row ` }>
        Bạn chưa có tài khoản?{' '}
          <Text
            style={tw`text-orange-500 font-bold`}
            onPress={() => navigation.navigate('SignUp')}  >
            Đăng ký
          </Text>
        </Text>
    </View>

  );
};

export default App;
