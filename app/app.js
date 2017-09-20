import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import {Router, Scene, Tabs} from 'react-native-router-flux'
import HomeView from './homeView/homeview'
import EventDetailView from './eventDetail/eventDetail'
import ListAllEventsView from './listAllEvents/listAllEvents'
import LoginView from './login/login'
import ProfileView from './profile/profile.js'
import MapView from './map/map'

/*
  <Scene key="home" component={HomeView} hideNavBar={true}/>
  <Scene key="eventDetail" component={EventDetailView} hideNavBar={true}/>
  <Scene key="listAllEvents" component={ListAllEventsView} hideNavBar={true}/>
  */

export default class ubik extends Component {

  render() {
    return (
      <Router>
        <Scene key="login">
          <Scene key="auth" component={LoginView} hideNavBar={true}/>

          <Scene key="root" hideNavBar={true}>

            <Tabs key="tabsbar" tabBarPosition='bottom'>
              
              <Scene key="home" title="home" hideNavBar={true}>
                <Scene key="profile" component={HomeView} initial/>
                <Scene key="eventDetail" component={EventDetailView} hideNavBar={true}/>
                <Scene key="listAllEvents" component={ListAllEventsView} hideNavBar={true}/>
              </Scene>

              <Scene key="profile" title="Profile" hideNavBar={true}>
                <Scene key="profileView" component={ProfileView}/>
              </Scene>

              <Scene key="map" hideNavBar={true}>
                <Scene key="mapview" component={MapView}/>
              </Scene>

            </Tabs>

          </Scene>

        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('ubik', () => ubik);
