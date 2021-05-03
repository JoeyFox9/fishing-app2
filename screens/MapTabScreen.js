import React, { useEffect, useState } from 'react';
//import MapView from 'react-native-maps';
import GoogleMapReact from 'google-map-react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
//import { Text, View } from '../components/Themed';
import LocationMarker from '../components/LocationMarker'
import { useAuth } from '../providers/auth'
import AuthProvider from '../providers/auth';
import * as api from '../services/auth';


function MapTabScreen (props) { 
  const {state} = useAuth();
  var userEmail = { email: state.user.email}
  

  const [catchData, setCatchData] = useState([])

  useEffect(() => {
    const fetchCatches = async () => {
      const res = await api.getCatches(userEmail)
      //const {catches} = res.catches

      setCatchData(res.catches)

    }

    fetchCatches()

  }, )
    return (
      <View style={{margin: 0, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{margin: 0, fontSize: 30}}>The Map</Text> 
        <GoogleMap catchData={catchData}/>      
      </View>
    );
  }  
  
  
  const GoogleMap = ({ catchData, center, zoom}) => {  

    
    const markers = catchData.map( ev => {
      return <LocationMarker lat={ev.location.lat} lng= {ev.location.lng}></LocationMarker>
    })
    

    const defaultProps = {
      center: {
        lat: 53.4964,
        lng: -9.2764
      },
      zoom: 11
    };  
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAMnCYtkva6cBE9YIygktjY5o09btPqB9I'}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          
          {markers}
          {/* <AnyReactComponent
            lat={53.4964}
            lng={9.2764}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
  
    
export default MapTabScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });