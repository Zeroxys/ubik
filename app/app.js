import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import {Router, Scene, Tabs} from 'react-native-router-flux'
import HomeView from './homeView/homeview'
import EventDetailView from './eventDetail/eventDetail'
import ListAllEventsView from './listAllEvents/listAllEvents'
import LoginView from './login/login'
import ProfileView from './profile/profile.js'
import MapView from './map/map'
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default class ubik extends Component {

  constructor(){
    super()
    this.TabIcon = this.TabIcon.bind(this)
  }

  TabIcon () {
    return (
      <Icon name="ios-home-outline" style={{fontSize: 20}}></Icon>
    )
  }

  render() {
    return (
      <Router>
        <Scene key="login">
          <Scene key="auth" component={LoginView} hideNavBar={true}/>

          <Scene key="root" hideNavBar={true}>

            <Tabs key="tabsbar" tabBarPosition='bottom'>
              
              <Scene key="home" title="home" hideNavBar={true} icon={this.TabIcon}>
                <Scene key="profile" component={HomeView} initial/>
                <Scene key="eventDetail" component={EventDetailView} hideNavBar={true}/>
                <Scene key="listAllEvents" component={ListAllEventsView} hideNavBar={true}/>
              </Scene>

              <Scene key="Profile" hideNavBar={true}>
                <Scene key="profileView" component={ProfileView}/>
              </Scene>

              <Scene key="Map" hideNavBar={true}>
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
