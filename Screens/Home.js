import { View, Text, Button } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'
import Card from '../components/Card';

export default function Home(props) {

  return (
    <View style={{backgroundColor:'#E4EDDA'}}>
      <Logo />
      <Card />
    </View>
  )
}

