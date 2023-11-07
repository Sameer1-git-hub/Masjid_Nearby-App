import { View, Text, Button } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'
import Distence from '../components/Distence'
import Card from '../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileScreen from '../ProfileScreen';






export default function Home(props) {

  
  // const handleLogout = async () => {
  //   try {
  //     // Get and print the token before removing it
  //     const token = await AsyncStorage.getItem('token');
  //     console.log('Token before removal:', token);
  
  //     // Clear the token from storage
  //     await AsyncStorage.removeItem('token');
  
  //     // Print a message and the token after removal
  //     console.log('Token after removal:', await AsyncStorage.getItem('token'));
  
  //     // Navigate to the login screen
  //     props.navigation.navigate('Login');
  //   } catch (error) {
  //     console.error('Error logging out:', error);
  //   }
  // };



  return (
    <View style={{backgroundColor:'#E4EDDA'}}>
      <Logo />
      {/* <Button title="Logout" onPress={handleLogout} /> */}
      
      
      <Card />
    </View>
  )
}

