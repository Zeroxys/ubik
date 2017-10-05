import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import TabsNav from './tabs/tabs'

export default class ubik extends Component {

  constructor(){
    super()
  }

  render() {
    return <TabsNav/>
  }
}

AppRegistry.registerComponent('ubik', () => ubik);
