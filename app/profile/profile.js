import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, AsyncStorage, Dimensions, TouchableHighlight} from 'react-native'
import FacebookButton from '../facebook/facebookButton'

const {width} = Dimensions.get('window')

export default class ProfileView extends Component {
  constructor (props) {
    super()
    this.state = {
      profile : ''
    }

    this.deleteAccount = this.deleteAccount.bind(this)
  }

  deleteAccount () {
    alert('eliminando xD')
  }

  async componentDidMount() {
    try {
      let value = await AsyncStorage.getItem('@FacebookUser')
      let info = JSON.parse(value)
      this.setState({profile : info})
    }catch (err){
      alert('Error recibir la info ' + err)
    }
  }
  
  render () {
    return (
      <View style = {styles.content}>
        <View style = {styles.imageContent}>
          <Image style={styles.profilePicture} source = {{uri : `https://graph.facebook.com/v2.5/${this.state.profile.id}/picture?type=large`}}/>
          <Text style={styles.name}>{this.state.profile.name}</Text>
        </View>
        <View style = {styles.options}>
          <TouchableHighlight style={styles.button} onPress = {this.deleteAccount} underlayColor='#99d9f4'>
            <Text style = {styles.buttonText}>Delete Account</Text>
          </TouchableHighlight>
          <FacebookButton/>
        </View>
      </View>
    )
  }
}
//<Text>{info.id}</Text>

const styles = new StyleSheet.create({
  content : {
    flex:1,
    backgroundColor : 'lightgrey',
    alignItems: 'center',
  },

  imageContent : {
    height: 200,
    width: width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#002662'
  },

  name: {
    color: 'white',
    fontSize : 16,
    fontWeight: '500'
  },

  profilePicture : {
    width: 150, 
    height: 150,
    borderRadius: 100
  },

  options: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  button: {
    width: 150,
    height: 36,
    backgroundColor: '#ff4a39',
    borderColor: '#ff4a39',
    borderRadius: 4,
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    alignSelf: 'center'
  },
})