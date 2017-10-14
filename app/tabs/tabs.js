import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import {Router, Scene, Tabs} from 'react-native-router-flux'
import HomeView from '../homeView/homeview'
import EventDetailView from '../eventDetail/eventDetail'
import ListAllEventsView from '../listAllEvents/listAllEvents'
import LoginView from '../login/login'
import ProfileView from '../profile/profile.js'
import MapView from '../map/map'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import FBSDK, {AccessToken} from 'react-native-fbsdk'

export default class TabsNav extends Component {

  constructor(){
    super()
    this.state = {
      select : true,
      init: true,
      logged : false
    }
    this.TabIcon = this.TabIcon.bind(this)
    this.isLogged = this.isLogged.bind(this)
  }

  TabIcon (IconName) {
    let icon = this.state.select ? IconName : `${IconName}-outline`
    console.log(Scene)
    return  (
      <Icon name={icon} style={{fontSize: 20}}/>
    )
  }

  async isLogged() {
    let value =  await AccessToken.getCurrentAccessToken()
    if(value) {
      this.setState({
        logged : true
      })
    }else{
      this.setState({
        logged : false
      })
    }
    //console.warn(this.state.logged)
  }

  componentWillMount() {
    this.isLogged()
  }

  render() {
    return (
      <Router>
        <Scene key="login">
        {/*<Scene key="auth" component={this.state.logged ? HomeView:LoginView} hideNavBar={true}/>*/}
        <Scene key="auth" component={LoginView} hideNavBar={true}/>

          <Scene key="root" hideNavBar={true}>
            <Tabs key="tabsbar" tabBarPosition='bottom' swipeEnabled={false} activeTintColor={'coral'}>
              
              <Scene key="home" title="home" hideNavBar={true} icon={() => this.TabIcon('ios-home')}>
                <Scene key="home" component={HomeView}/>
                <Scene key="eventDetail" component={EventDetailView} hideNavBar={true}/>
                <Scene key="listAllEvents" component={ListAllEventsView} hideNavBar={true}/>
              </Scene>

              <Scene key="Map" hideNavBar={true} icon={() => this.TabIcon('ios-map')}>
                <Scene key="mapview" component={MapView}/>
              </Scene>
              

              <Scene key="add" hideNavBar={true} icon={() => this.TabIcon('ios-share')}>
                <Scene key="mapview" component={ListAllEventsView}/>
              </Scene>

              <Scene key="Profile" hideNavBar={true} icon={() => this.TabIcon('ios-person')}>
                <Scene key="profile" component={ProfileView}/>
              </Scene>

            </Tabs>
          </Scene>

        </Scene>
      </Router>
    );
  }
}