import MapView from 'react-native-maps'
import BoxEvent from './boxEvents/boxEvents.js'
import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Alert,
  Dimensions,
  Image,
  View
} from 'react-native';

const {width, height} = Dimensions.get('window') 

export default class ubik extends Component {

  render() {
    return (
      <View style={styles.container}>
        <BoxEvent/>        
      </View>
    );
  }
}

styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: 'space-between',
    alignItems:'flex-start',
    flexDirection: 'column',
    backgroundColor: '#E7E5DF'
  },
})

AppRegistry.registerComponent('ubik', () => ubik);
