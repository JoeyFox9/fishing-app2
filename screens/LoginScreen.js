import React from 'react';
import { StyleSheet, Dimensions, View, Text, TextInput, TouchableOpacity,} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Form from 'react-native-basic-form';
import { useAuth } from '../providers/auth'
import * as api from "../services/auth";


export default function LoginScreen (props){
     const {navigation} = props;
     const {navigate} = props.navigation;
  
    const { handleLogin }  = useAuth(); 
  
    const fields = [
      {name: 'email', label: 'Email Address', required: true},
      {name: 'password', label: 'Password', required: true, secure: true}
    ]
  
    async function onSubmit(state){
  
      try {
        console.log("here in onSubmit" + state)
        console.log(state)
        let response = await api.login(state);
        console.log(response)
        await handleLogin(response);
  
        let username = (response.user.username !== null);
        if (username) navigate('Home');
        else navigation.replace('Username');
      } catch (error) {
        console.log(error)
        //setError(error.message);
      }
    }
  
    let formProps = { title: "Login", fields, onSubmit}
  
        return (
          <View style={styles.container}>
            <Text style={styles.Text}> My Fishing mApp Login</Text>
            <StatusBar style="auto" />
            <Form {...formProps}></Form>
  
  
            <View style={styles.btnContainer}>
              
                <TouchableOpacity
                //style={styles.userBtn}
                onPress={() => navigation.navigate('Register')}
                >
                    <Text >No Account Yet? Signup Here</Text>
                </TouchableOpacity>
            </View>
  
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