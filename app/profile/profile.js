import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, AsyncStorage} from 'react-native'
import FacebookButton from '../facebook/facebookButton'

export default class ProfileView extends Component {
  constructor (props) {
    super()
    this.state = {
      profile : ''
    }
    this.getInformation = this.getInformation.bind(this)
    this.deleteInformation = this.deleteInformation.bind(this)
    this.allInformation = this.allInformation.bind(this)
    this.meet = this.meet.bind(this)
  }

  meet () {
    alert('hi')
  }

  async allInformation () {
    try {
      let value = await AsyncStorage.getAllKeys()
      alert(value)
    }catch (err) {
      alert('Some error : ' + err)
    }
  }

  async deleteInformation () {
    try {
      await AsyncStorage.clear()
    }catch (err) {
      alert('CANNOT DELETE THE STORAGE')
    }
  }

  async getInformation () {
    try {
      const value = await AsyncStorage.getItem('@FacebookUser')
      if ( value !== null ) {
        this.setState({
          profile : value
        })
      }
    }catch (err){
      alert('Error retrieving the data')
    }
  }

  componentWillMount() {
    this.getInformation()
  }

  render () {
    let profileInfo = this.state.profile
    return (
      <View>
        <Text>{profileInfo}</Text>
        <Text onPress={this.deleteInformation}>delete the storage</Text>
        <Text onPress={this.allInformation}>all key's</Text>
        <FacebookButton/>
      </View>
    )
  }
}


//<Image style={{width: 80, height: 80}} source = {{uri : `https://graph.facebook.com/v2.5/${info.id}/picture?type=large`}}/>
//<Text>{info.id}</Text>