import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import GalleryScreen from "../screens/GalleryScreen"
import CameraScreen from "../screens/CameraScreen"
import BottomTabNavigator from '../navigation/BottomTabNavigator'


//import {headerStyle, headerTitleStyle} from '../theme'

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
        initialRouteName = "Login">
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>   
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="Gallery" component={GalleryScreen} />
        </Stack.Navigator>
    )
}
export default AuthStack;