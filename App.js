import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/views/screens/HomeScreen';
import COLORS from './src/consts/colors';
import DetailsScreen from './src/views/screens/DetailsScreen';
import BlogsScreen from './src/views/screens/BlogsScreen';
import ContactScreen from './src/views/screens/ContactScreen';
import BottomNavigator from './src/components/BottomNavigator';
import LoginScreen from './src/views/screens/LoginScreen';
import RegisterScreen from './src/views/screens/RegisterScreen';
import AccountScreen from './src/views/screens/AccountScreen';



const Stack = createStackNavigator();

const App = () => {

  // const navigation = useNavigation();

  const [isAuth, setIsAuth] = useState(null)

  const Profile = async () => {
    try {
      // get data 
      const response = await fetch('https://api.hoodzpronos.com/profile');
      //If response is in json then in success
      const data = await response.json();
      //Success 
      setIsAuth(data)
      //If response is not in json then in error
    } catch (error) {
      //Error 
      console.error(error);
    }
  }


  //@ IF REFRISH PAGE GET DARA
  useEffect(() => {
    Profile()
  }, []);


  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.black} />
      {
        isAuth &&
          isAuth?.role === 'client' &&
          isAuth.isAuth === true ? (
          <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
              <Stack.Screen name="BlogsScreen" component={BlogsScreen} />
              <Stack.Screen name="ContactScreen" component={ContactScreen} />
              <Stack.Screen name="AccountScreen" component={AccountScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </Stack.Navigator>
            <BottomNavigator />
          </>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </Stack.Navigator>
        )
      }

    </NavigationContainer>
  );
};

export default App;
