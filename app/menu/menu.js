import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class Menu extends Component {
  constructor(props){
    super()
    this.data = props.name
  }

  render(){
    return (
      <View>
        <Text>{this.data}</Text>
      </View>
    )
  }
}