import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, AsyncStorage} from 'react-native'
import FacebookButton from '../facebook/facebookButton'

export default class ProfileView extends Component {
  constructor (props) {
    super()
    this.state = {
      profile : ''
    }
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
      <View>
        <Text>{this.state.profile.name}</Text>
        <Text>{this.state.profile.id}</Text>
        <FacebookButton/>
      </View>
    )
  }
}


//<Image style={{width: 80, height: 80}} source = {{uri : `https://graph.facebook.com/v2.5/${info.id}/picture?type=large`}}/>
//<Text>{info.id}</Text>