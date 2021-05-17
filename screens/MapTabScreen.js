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

      setCatchData(res.catches)
    }
    fetchCatches()

  },)

    return (
      <View style={{margin: 0, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <GoogleMap catchData={catchData} userEmail={state.user.email}/>  
      </View>
    );
  }  

  const InfoWindow = (props) => {
    const { selected } = props;
    const infoWindowStyle = {

      width: 220,
      backgroundColor: 'white',
      boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
      padding: 10,
      fontSize: 14,
      zIndex: 100,
    };
  
    return (
      <div style={infoWindowStyle}>
        <div style={{ fontSize: 16 }}>
          
        </div>
       
      </div>
    );
  };
  

  
  
  
  const GoogleMap = ({ catchData, userEmail, center, zoom}) => {    

    const [selected, selectMarker] = useState([])
    
    const markers = catchData.map( ev => {
      return <LocationMarker lat={ev.location.lat} lng= {ev.location.lng} customClickEvent={()=>{selectMarker(ev);console.log(ev)}}></LocationMarker>
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
          onClick={({x, y, lat, lng, event}) => api.addCatch({email: userEmail,catch: {location:{lat:lat,lng:lng}}})}
        >
          
          {markers}

          
         
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

// Reference:
//https://www.youtube.com/watch?v=ontX4zfVqK8&t=941s