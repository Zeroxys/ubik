import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, NetInfo} from 'react-native'
import TwitterButton from '../twitter/twitterButton'
import FacebookButton from '../facebook/facebookButton'

export default class LoginView extends Component {
  constructor(){
    super()
  }

  componentWillMount () {
    NetInfo.isConnected.fetch()
    .then( isConnected => {
      if(!isConnected) alert('Tu dispositivo esta ' + (isConnected ? '' : 'offline' + ' te recomendamos mantener tu dispositivo conectado para estar actualizado'));
    })
    .catch(error => {
      alert(error);
    });
  }

  render(){
    return(
      <Image style={styles.container} source = {{uri: 'https://i.pinimg.com/originals/cd/c3/d2/cdc3d2e93d3e2c5f3722ad471d3b798f.jpg'}}>
        
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source = {{uri: 'https://cdn4.iconfinder.com/data/icons/cloud-computing-2/500/cloud-network-sign-512.png'}}/>
      
          <View style={styles.socialButtons}>
            <FacebookButton/>
            <TwitterButton/>
          </View>

          <View>
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
    padding:20,
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
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  socialButtons:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  logo:{
    flex: 1,
    width: 180,
    height: 180,
    resizeMode: 'contain'
  },

  terms:{
    color: 'white',
    fontWeight: '400'
  }

})
