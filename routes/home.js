import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabScreen from "../screens/HomeTabScreen";


//import {headerStyle, headerTitleStyle} from '../theme'
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeTabScreen}/>            
        </Stack.Navigator>
    );
}

export default HomeStack;