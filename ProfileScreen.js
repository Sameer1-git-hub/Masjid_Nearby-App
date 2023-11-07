import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Logout from './logincomponent/Logout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Btn from './logincomponent/Btn';
import { btn1 } from './logincomponent/Constaint';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = (Props) => {


  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Clear user data from storage

      await AsyncStorage.removeItem('token'); // Assuming you store a user token

      // Navigate to the login screen
      Props.navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', padding: 10, borderRadius: 10 }}>
           Back to home
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>

        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Jane Doe</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>jane.doe@example.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>San Francisco, CA</Text>
        </View>
        {/* Add more infoContainers for other user details */}


        <Btn bgcolor={btn1} textcolor="btn2" btnLabel="Logout" press={handleLogout} />



      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default ProfileScreen;
