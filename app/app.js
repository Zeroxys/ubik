import MapView from 'react-native-maps'
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native'; 
import {Router, Scene} from 'react-native-router-flux'
import HomeView from './homeView/homeview'
import EventDetailView from './eventDetail/eventDetail'
import ListAllEventsView from './listAllEvents/listAllEvents'
import LoginView from './login/login'

export default class ubik extends Component {

  render() {
    return (
      <Router>
        <Scene key="login">
          <Scene key="auth" component={LoginView} hideNavBar={true}/>

          <Scene key="root">
            <Scene key="home" component={HomeView} hideNavBar={true}/>
            <Scene key="eventDetail" component={EventDetailView} hideNavBar={true}/>
            <Scene key="listAllEvents" component={ListAllEventsView} hideNavBar={true}/>          
          </Scene>

          <Scene key="menu">
            <Scene key="home" component={HomeView} hideNavBar={true}/>   
          </Scene>

        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('ubik', () => ubik);
