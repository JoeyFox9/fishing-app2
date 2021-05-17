/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import BottomTabNavigator from './BottomTabNavigator';
//import * as SecureStore from 'expo-secure-store';
import reducer, {initialState} from '../reducer'
import LoginScreen from '../screens/LoginScreen';
import AuthStack from '../routes/auth';
import AuthLoading from '../screens/AuthLoading'
import AuthProvider from '../providers/auth';


export default function Navigation(props) {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator />
      </AuthProvider>      
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

const AppStack = createSwitchNavigator(
  {
    Loading: AuthLoading,
    Auth: AuthStack,
    App: BottomTabNavigator,
  },
  {initialRouteName: 'Loading'}
)

const Navigator = createAppContainer(AppStack);

//References:
// https://reactnavigation.org/docs/auth-flow/
// https://betterprogramming.pub/how-to-add-authentication-to-your-react-native-app-with-react-hooks-and-react-context-api-46f57aedbbd

