import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import homeWhite from './icons/homeWhite.png';
import homeBlack from './icons/homeBlack.png';

const [home, setHome] = useState();
  const [User, setUser] = useState();

// const onPress = (props) => {
//   props.navigation.navigate('ProfileScreen');
// }






const Icons = () => {
  return (
    <View>
      <TouchableOpacity
        
        onPress={() => {
          navigation.navigate('HomeScreen');
          setHome(true);
          setUser(false);
        }}>
        {home ? (
          <Image  source={homeBlack} />
        ) : (
          <Image  source={homeWhite} />
        )}

        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        
        onPress={() => {
          navigation.navigate('ProfileScreen');
          setHome(false);
          setUser(true);
        }}>
        {User ? (
          <Image  source={homeBlack} />
        ) : (
          <Image  source={homeWhite} />
        )}

        <Text style={styles.iconText}>user</Text>
      </TouchableOpacity>
      
    </View>
  )
}
export default Icons;