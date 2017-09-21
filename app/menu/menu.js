import React, {Component} from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const width = Dimensions.get('window').width

export default class Menu extends Component {
  constructor(props){
    super()
  }

  render(){
    return (
      <View style={styles.contain}>
        <Icon style={styles.size} name="ios-home-outline"/>
        <Icon style={styles.size} name="ios-map-outline"/>
        <Icon style={styles.size} name="ios-add-outline"/>
        <Icon style={styles.size} name="ios-contact-outline"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contain : {
    width : width,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#CFD8DC',
    justifyContent : 'space-around',
    alignItems: 'center',
  },

  size : {
    fontSize : 25
  }
})