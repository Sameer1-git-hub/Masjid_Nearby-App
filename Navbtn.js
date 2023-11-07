// import * as React from 'react';
// import {View , Text } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './HomeScreen';
// import ProfileScreen from './ProfileScreen';

// const Tab = createBottomTabNavigator();


// function App() {
//   return (
    
//       <Tab.Navigator initialRouteName='HomeScreen'>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={ProfileScreen} />
//       </Tab.Navigator>
    
//   );
// }

// export default App;


import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

export default function Main() {
  const navigation = useNavigation()
  return (
    <View>
    <TouchableOpacity onPress={navigation.navigate('ProfileScreen')}>
        <Text>Main</Text>
      </TouchableOpacity>
    </View>
  )
}