import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, Button} from 'react-native'
import FBSDK, {LoginButton, AccessToken} from 'react-native-fbsdk'
import {Actions} from 'react-native-router-flux'
import TwitterButton from '../twitter/twitterButton'

export default class LoginView extends Component {
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
      <Image style={styles.container} source = {{uri: 'https://i.pinimg.com/originals/cd/c3/d2/cdc3d2e93d3e2c5f3722ad471d3b798f.jpg'}}>
        
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source = {{uri: 'https://cdn4.iconfinder.com/data/icons/cloud-computing-2/500/cloud-network-sign-512.png'}}/>
        
          <View style={styles.socialButtons}>
            <LoginButton
              style={styles.fbutton}
              readPermissions={['public_profile', 'email']}
              onLoginFinished={this.loginFunction}
              />

              <TwitterButton/>
          </View>

          <View style={styles.socialButtons}>
            <Text style={styles.terms}>I agree to the terms and conditions</Text>
          </View>
        
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20
  },

  logoContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img:{
    flex:1,
    resizeMode:'cover',
  },

  socialContain:{
    flex:1,
    backgroundColor:'red',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },

  socialButtons:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo:{
    flex: 1,
    width: 180,
    height: 180,
    resizeMode: 'contain'
  },

  fbutton:{    
    width: 150,
    height:32,
  },

  terms:{
    color: 'white',
    fontWeight: '400'
  }
})
