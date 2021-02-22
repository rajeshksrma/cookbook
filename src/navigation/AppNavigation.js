import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage'
import SignUpScreen from '@screens/SignUpScreen';
import LoginScreen from '@screens/LoginScreen';
import HomeScreen from '@screens/HomeScreen';
import AddRecipeScreen from '@screens/AddRecipeScreen';
import DishesScreen from '@screens/DishesScreen';
import DishDetailScreen from '@screens/DishDetailScreen';
import ReviewScreen from '@screens/ReviewScreen';

const Stack = createStackNavigator();


const AppNavigation = () =>  {

    const [isUserActive, setIsUserActive] = useState(false);
     

      useEffect(() => {
        AsyncStorage.getItem("isUserActive").then((value) => {
          if(value != null && value == 'true') setIsUserActive(true)
          else setIsUserActive(false)
          
          console.log('value =', value)
        })
    }, []);


  authStack = () =>
    <Stack.Navigator>

      <Stack.Screen name='Login' component={LoginScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={appStack}
        options={{ headerShown: false }} />

      <Stack.Screen name='SignUp' component={SignUpScreen}
        options={{ headerShown: false }} />
    </Stack.Navigator>

    appStack = () =>
    <Stack.Navigator>
     
      <Stack.Screen name='Home' component={HomeScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name='AddRecipe' component={AddRecipeScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name='DishesScreen' component={DishesScreen}
        options={{ headerShown: false }} />   
        <Stack.Screen name='DishDetailScreen' component={DishDetailScreen}
        options={{ headerShown: false }} />   
        <Stack.Screen name='ReviewScreen' component={ReviewScreen}
        options={{ headerShown: false }} />  
         <Stack.Screen name='Login' component={LoginScreen}
        options={{ headerShown: false }} />
    </Stack.Navigator>
    
  

  return (
    <NavigationContainer>
      {isUserActive ? appStack() : authStack()}
      {/* {user== 'null' && authStack()} */}
    </NavigationContainer>
  );
}

export default AppNavigation;