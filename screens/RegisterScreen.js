import React from "react";
import { StyleSheet, View ,Text, Dimensions, Alert} from "react-native";
import Form from 'react-native-basic-form';
import * as api from "../services/auth";



export default function RegisterScreen(props){

    async function onSubmit(state){
        let response = await api.register(state);

        Alert.alert('Registration Successful',
        response.message,
        )
    }
    const fields = [

            {name: 'email', label: 'Email Address', required: true},
            {name: 'password', label: 'Password', required: true, secure:true}
        ];

    let formProps = {title: "Register", fields, onSubmit };

      return (
        <View style={styles.container2}>
                  <Text> mApp My Fish Signup</Text>
                  {/* <StatusBar style="auto" /> */}

                   <Form {...formProps}></Form>
        </View>
        );


 }

 const styles = StyleSheet.create({

  Text: {
      fontSize: 40,
      textAlign: "center"
  },

container: {
  flex: 1,
  backgroundColor: '#0000FF',
  alignItems: 'center',
  justifyContent: 'center',
},

container2: {
    flex: 1,
    backgroundColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },

input: {
  width: "90%",
   backgroundColor: '#fff',
   padding: 15,
   marginBottom: 10
},

btnContainer2: {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "90%"
},

userBtn: {
backgroundColor: "#00FF00",
padding: 15,
width: "45%",
},

userBtn2: {
backgroundColor: "#0000FF",
padding: 15,
width: "45%",
},

map: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
},

btnTxt: {
fontSize: 18,
textAlign: "center"
}

});

//References:
// https://reactnavigation.org/docs/auth-flow/
// https://betterprogramming.pub/how-to-add-authentication-to-your-react-native-app-with-react-hooks-and-react-context-api-46f57aedbbd
