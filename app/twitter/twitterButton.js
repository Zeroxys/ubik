import React, {Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet, NativeModules} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import keys from './keys.js'
import {Actions} from 'react-native-router-flux'

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
    alert('logout')
    RNTwitterSignIn.logOut();
    this.setState({
      isLogged: false,
    });
  }

  twitterSignIn(){
    RNTwitterSignIn.init(keys.TWITTER_COMSUMER_KEY, keys.TWITTER_CONSUMER_SECRET)
    
    RNTwitterSignIn.logIn().then( (loginData) => {
      const { authToken, authTokenSecret } = loginData
      alert(authToken)
      if (authToken && authTokenSecret) {
        this.setState({
          isLogged: true,
        })
        if(this.state.isLogged) Actions.root()
      }
    }).catch((error)=>{
      alert(error)
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
            <Icon.Button name='logo-twitter' size={20} color='white' style={styles.icon} onPress={this.twitterSignIn}>
              Login Twitter
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
    width: 150,
    height: 30,
  }
});