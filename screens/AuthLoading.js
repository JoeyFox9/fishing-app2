import React, {useEffect} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import { StackActions } from 'react-navigation';

import { useAuth } from "../providers/auth";

export default function AuthLoading(props) {
    const {navigate} = props.navigation;
    const { getAuthState } = useAuth();

    useEffect(() => {
        initialize()
    }, []);

    async function initialize() {
        try {
            const {user} = await getAuthState();
            console.log("here auth loading");

            if (user) {
                //check if username exist
                let username = !!(user.username);

                if (username) navigate('App');
                

            } else navigate('Auth');
        } catch (e) {
            navigate('Auth');
        }
    }

    return (
        <View style={{backgroundColor: "#fff", alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <ActivityIndicator/>
            <Text>{"Loading User Data"}</Text>
        </View>
    );
}

//References:
// https://reactnavigation.org/docs/auth-flow/
// https://betterprogramming.pub/how-to-add-authentication-to-your-react-native-app-with-react-hooks-and-react-context-api-46f57aedbbd
