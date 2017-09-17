import React, {PureComponent} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

export default class LoadingBox extends PureComponent {
  render () {
    return (<View style={styles.contain}>
        <Spinner visible = {true}/>
      </View>)
  }
}

const styles = StyleSheet.create({
  contain : {
    width: 180,
    height: 180
  }
})
