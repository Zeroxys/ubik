import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Search from '../search/search'
export default class Form extends Component {
  constructor(){
    super()
  }

  render () {
    return (
      <View>
        <Search/>
      </View>
    )
  }
}