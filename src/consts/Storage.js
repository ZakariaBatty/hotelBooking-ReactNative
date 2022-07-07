import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (value) => {
  if (value === null) {
    Alert.alert('Warning!', 'Please write your data.')
  } else {
    try {
      await AsyncStorage.setItem('isAuth', JSON.stringify(value))
    } catch (error) {
      console.log(error);
    }
  }
}


export const isLOgin = async () => {
  try {
    const value = await AsyncStorage.getItem('isAuth')
    if (value !== null) {
      console.log(value)
    } else {
      console.log(value)
    }
  } catch (e) {
    console.error(e)
  }
}

