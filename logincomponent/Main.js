import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Main(props) {
  return (
    <View>
    <TouchableOpacity onPress={props.navigation.navigate('ProfileScreen')}>
        <Text>Main</Text>
      </TouchableOpacity>
    </View>
  )
}