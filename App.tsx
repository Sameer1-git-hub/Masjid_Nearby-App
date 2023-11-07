import React, {useEffect, useContext, createContext} from 'react';
import {View , Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './logincomponent/Login';
import Register from './logincomponent/Register';
import Home from './Screens/Home';
import ProfileScreen from './ProfileScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer >
    
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;