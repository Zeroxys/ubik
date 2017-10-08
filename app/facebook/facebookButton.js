import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import FBSDK, {LoginButton, AccessToken} from 'react-native-fbsdk'
import {Actions} from 'react-native-router-flux'
import Profile from '../profile/profile'

export default class FacebookButton extends Component {
  constructor(){
    super()
    this.loginFunction = this.loginFunction.bind(this)
    this.initUser = this.initUser.bind(this)

    this.state = {
      isLogged : false,
      profile : null
    }
  }

  initUser(token){
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        isLogged : !this.state.isLogged,
        profile : json
      })
      if(this.state.isLogged) Actions.root()
    })
    .catch(() => {
      reject('ERROR GETTING DATA FROM FACEBOOK')
    })
  }

  loginFunction (err, result){
    if(err){
      alert('Network is unreachable')
    } else if(result.isCancelled){
      alert("login cancelled")
    } else {
      AccessToken.getCurrentAccessToken().then(
        (token) => {
          this.initUser(token.accessToken.toString())
          if(token) Actions.root()
        }
      ).catch( err => alert(err))
    }
  }

  render(){
    return(
      <LoginButton style={styles.fbutton} readPermissions={['public_profile', 'email']} onLoginFinished={this.loginFunction}/>
    )
  }
}

const styles = StyleSheet.create({
  fbutton:{    
    width: 150,
    height:32,
  },
})
