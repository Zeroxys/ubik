import MapView from 'react-native-maps'
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native'; 
import {Router, Scene} from 'react-native-router-flux'
import HomeView from './homeView/homeview'
import EventDetailView from './eventDetail/eventDetail'

export default class ubik extends Component {

  render() {
    return (
      <Router>
        <Scene key="root"> 
         <Scene key="home" component={HomeView} hideNavBar={true}/>
         <Scene key="eventDetail" component={EventDetailView}/>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('ubik', () => ubik);
