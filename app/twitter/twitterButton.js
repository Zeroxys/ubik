import React, {Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet, NativeModules} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import keys from './keys.js'

const { RNTwitterSignIn } = NativeModules;  

export default class TwitterButton extends Component {
  constructor(props){
    super()

    this.state = {
      isLogged : false
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.twitterSignIn = this.twitterSignIn.bind(this)
  }

  handleLogOut(){
    console.log('logout')
  }

  twitterSignIn(){
    RNTwitterSignIn.init(keys.TWITTER_COMSUMER_KEY, keys.TWITTER_CONSUMER_SECRET)
    
    RNTwitterSignIn.logIn().then( (loginData) => {
      console.log(loginData)
      const { authToken, authTokenSecret } = loginData
      if (authToken && authTokenSecret) {
        this.setState({
          isLoggedIn: true,
        })
      }
    }).catch((error)=>{
      console.log(error)
    })
  }

  render(){

    return (
      <View style={styles.contain}>
        {
          this.state.isLogged ? 
            <TouchableOpacity onPress={this.handleLogOut}>
              <Text>Log out</Text>
            </TouchableOpacity>
            :
            <Icon.Button name='logo-twitter' size={32} color='white' style={styles.icon} onPress={this.twitterSignIn}>
              Login with Twitter
            </Icon.Button>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contain : {
    flex: 1
  },

  icon: {
    width: 200,
    height: 50,
  }
});