import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../HomeScreen'; // Import your screens
import ProfileScreen from '../../ProfileScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
