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
      <View style = {styles.content}>
        <Image style={styles.profilePicture} source = {{uri : `https://graph.facebook.com/v2.5/${this.state.profile.id}/picture?type=large`}}/>
        <Text>{this.state.profile.name}</Text>
        <FacebookButton/>
      </View>
    )
  }
}
//<Text>{info.id}</Text>

const styles = new StyleSheet.create({
  content : {
    flex:1,
    backgroundColor : 'lightgrey',
    justifyContent : 'space-around',
    alignItems: 'center',
  },

  profilePicture : {
    width: 150, 
    height: 150,
    borderRadius: 100
  }
})