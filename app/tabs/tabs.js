import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import {Router, Scene, Tabs} from 'react-native-router-flux'
import HomeView from '../homeView/homeview'
import EventDetailView from '../eventDetail/eventDetail'
import ListAllEventsView from '../listAllEvents/listAllEvents'
import LoginView from '../login/login'
import ProfileView from '../profile/profile.js'
import MapView from '../map/map'
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default class TabsNav extends Component {

  constructor(){
    super()
    this.TabIcon = this.TabIcon.bind(this)
    this.state = {
      select : true,
      init: true
    }
  }

  TabIcon (IconName) {
    let icon = this.state.select ? IconName : `${IconName}-outline`
    return  (
      <Icon name={icon} style={{fontSize: 20}}/>
    )
    
  }

  render() {
    return (
      <Router>
        <Scene key="login">
          <Scene key="auth" component={LoginView} hideNavBar={true}/>

          <Scene key="root" hideNavBar={true}>
            <Tabs key="tabsbar" tabBarPosition='bottom' swipeEnabled={false}>
              
              <Scene key="home" title="home" hideNavBar={true} icon={() => this.TabIcon('ios-home')} onPress={ () => console.warn()}>
                <Scene key="profile" component={HomeView}/>
                <Scene key="eventDetail" component={EventDetailView} hideNavBar={true}/>
                <Scene key="listAllEvents" component={ListAllEventsView} hideNavBar={true}/>
              </Scene>

              <Scene key="Map" hideNavBar={true} icon={() => this.TabIcon('ios-map')}>
                <Scene key="mapview" component={MapView}/>
              </Scene>
              

              <Scene key="add" hideNavBar={true} icon={() => this.TabIcon('ios-add')}>
                <Scene key="profileView" component={ProfileView}/>
              </Scene>

              <Scene key="Camera" hideNavBar={true} icon={() => this.TabIcon('ios-camera')}>
                <Scene key="profileView" component={ProfileView}/>
              </Scene>

              <Scene key="Profile" hideNavBar={true} icon={() => this.TabIcon('ios-person')}>
                <Scene key="profileView" component={ProfileView}/>
              </Scene>

            </Tabs>
          </Scene>

        </Scene>
      </Router>
    );
  }
}