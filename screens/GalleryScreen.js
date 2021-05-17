import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

export default function GalleryScreen({navigation}){



    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text>Gallery</Text>
           <View style={styles.btnContainer2}>
                <TouchableOpacity
                      style={styles.userBtn}
                      onPress={() => navigation.navigate('Camera')}
                  >
                      <Text style={styles.btnTxt}>Take Picture</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                           style={styles.userBtn}
                           onPress={() => navigation.navigate('Library')}
                      >
                      <Text style={styles.btnTxt}>Choose from Library</Text>
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