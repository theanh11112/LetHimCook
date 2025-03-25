import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserToken = async (token: string) => {
  await AsyncStorage.setItem('user_token', token);
};

const getUserData = async () => {
    const token = await AsyncStorage.getItem('user_token');
    const userData = await AsyncStorage.getItem('user_data');

    return {
      token,
      user: userData ? JSON.parse(userData) : { username: null, userId: null },
    };
};

  
const removeUserToken = async () => {
  await AsyncStorage.removeItem('user_token');
};

export { setUserToken, getUserData, removeUserToken };
