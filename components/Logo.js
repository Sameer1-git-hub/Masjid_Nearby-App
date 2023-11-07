import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Location from './Location';
import { btn2 } from '../logincomponent/Constaint';
import Btn from '../logincomponent/Btn';
import { useNavigation } from '@react-navigation/native';


const Logo = (props) => {


  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container1}>
        <View style={styles.box}>
          <Image source={require('../imagess/mmtlogo.png')} style={{ width: 100, height: 60 }} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} >
          <Image source={require('../imagess/profile.png')} style={{ width: 60, height: 60, borderRadius: 50, top: 20, }} />
        </TouchableOpacity>

      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around'

  },
  box: {
    width: 70,
    height: 70,
    marginHorizontal: 20,
    marginVertical: 20,


  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    width: 80,
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
  },
});

export default Logo;