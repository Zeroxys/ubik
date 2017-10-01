import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import FBSDK, {LoginButton, AccessToken} from 'react-native-fbsdk'
import {Actions} from 'react-native-router-flux'

export default class FacebookButton extends Component {
  constructor(){
    super()
    this.loginFunction = this.loginFunction.bind(this)
    this.initUser = this.initUser.bind(this)
  }

  initUser(token){
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      user.name = json.name
      user.id = json.id
      user.user_friends = json.friends
      user.email = json.email
      user.username = json.name
      user.loading = false
      user.loggedIn = true
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
        (data) => {
          this.initUser(data)
          Actions.root()
        }
      )
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
    marginBottom: 10
  },
})
