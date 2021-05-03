import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({navigation}){

    async function getMoviesFromApi() {
      try {
        console.log("home")
        let response = await fetch('http://10.0.0.6:3000/user/info');
        let responseJson = await response.json();
        console.log(responseJson.message);
        return responseJson.message
      } catch (error) {
        console.error(error);
      }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Text>Home Screen</Text>

            <View style={styles.btnContainer2}>
                          <TouchableOpacity
                                style={styles.userBtn}
                                onPress={() => navigation.navigate('GeoMap')}
                            >
                                <Text style={styles.btnTxt}>Geo Maps</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                     style={styles.userBtn}
                                     onPress={() => navigation.navigate('Gallery')}
                                >
                                <Text style={styles.btnTxt}>Gallery</Text>
                          </TouchableOpacity>
            </View>

            <TextInput
                      style={styles.input}
                      placeholder="Enter Weather Conditions"
                      />

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
