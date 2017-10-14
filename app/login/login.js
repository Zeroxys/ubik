import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, NetInfo, Dimensions, AsyncStorage} from 'react-native'
import TwitterButton from '../twitter/twitterButton'
import FacebookButton from '../facebook/facebookButton'
import {Actions} from 'react-native-router-flux'

const {width, height} = Dimensions.get('window')

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
      <Image style={styles.container} source = {{uri: 'https://static.pexels.com/photos/417192/pexels-photo-417192.jpeg'}}>

        <View style={styles.principalContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Urbanik</Text>
          </View>
      
          <View style={styles.socialButtons}>
            <FacebookButton/>
            <TwitterButton/>
          </View>
        </View>

        <View>
          <Text style={styles.terms}>I agree to the terms and conditions</Text>
        </View>

      </Image>
    )
  }
}

const styles = StyleSheet.create({
  
  img:{
    flex:1,
  },

  container : {
    flex: 1,
    alignItems: 'center'
  },

  principalContainer: {
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  title: {
    fontSize : 60,
    color: 'white',
    fontWeight: '600',
  },

  socialButtons: {
    width: width,
    flexDirection : 'row',
    justifyContent : 'space-around'
  },

  terms:{
    color: 'white',
    fontWeight: '400',
    paddingBottom : 30
  },

})
