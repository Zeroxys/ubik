import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class EventDetail extends Component {
  constructor (props) {
    super()
    this.eventData = props.event
  }

  render() {
    return (
      <View style={styles.mainContent}>
        <Text style={styles.textTitle}>{this.eventData.name}</Text>
        <View>
          <Image style={styles.img} source={{uri:this.eventData.img}}/>
          <View style={styles.information}>
            <Text>{this.eventData.enter}</Text>
            <Text>{this.eventData.rate}</Text>
            <Text>{this.eventData.schedule}</Text>
          </View>
        </View>
        <View>
          <Text>{this.eventData.review}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  mainContent:{
    marginLeft: 10
  },

  img:{
    width : 180,
    height : 300,
    backgroundColor: 'red'
  },

  textTitle: {
    color:'black',
    fontSize: 25,
    paddingBottom:5,
  }
})
