/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

//import Colors from '../constants/Colors';

import HomeTabScreen from '../screens/HomeTabScreen';
import MapTabScreen from '../screens/MapTabScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab">
      
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTabNavigator}
        
      />
      <BottomTab.Screen
        name="MapTab"
        component={MapTabNavigator}
        
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
// function TabBarIcon(props) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeTabStack = createStackNavigator();

function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeTabScreen"
        component={HomeTabScreen}
        options={{ headerTitle: 'Home Tab Title' }}
      />
    </HomeTabStack.Navigator>
  );
}

const MapTabStack = createStackNavigator();

function MapTabNavigator() {
  return (
    <MapTabStack.Navigator>
      <MapTabStack.Screen
        name="MapTabScreen"
        component={MapTabScreen}
        
      />
    </MapTabStack.Navigator>
  );
}

//References:
// https://reactnavigation.org/docs/auth-flow/
// https://betterprogramming.pub/how-to-add-authentication-to-your-react-native-app-with-react-hooks-and-react-context-api-46f57aedbbd

