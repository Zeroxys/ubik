import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View, Image, Button, Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux'

const {width} = Dimensions.get('window')

export default class EventDetail extends Component {
  constructor (props) {
    super()
    this.eventData = props.event
    this.onPressMap = this.onPressMap.bind(this)
  }

  onPressMap(){
    Actions.mapview()
  }

  render() {
    return (
      <View style={styles.mainContent}>
        <View style={styles.basicInform}>
          
          <Image style={styles.img} source={{uri:this.eventData.img}}/>
          
          <View style={styles.information}>
            <Text style={styles.textTitle}>{this.eventData.name}</Text>
            <Text style={styles.textSub}>{this.eventData.enter}</Text>
            {/*<Text style={styles.textSub}>classification: {this.eventData.rate}</Text>*/}
            <Text style={styles.textSub}>Schedule: {this.eventData.schedule}</Text>
          </View>

        </View>
        <View style={styles.review}>
          <Text style={styles.textSub}>Preview</Text>
          <Text>{this.eventData.review}</Text>
        </View>

        <Button
          onPress={this.onPressMap}
          title="View Map"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  img:{
    width: width,
    height: 200,
  },

  textTitle: {
    color:'grey',
    fontSize: 25,
    paddingBottom:5,
    fontWeight: '200',
  },

  textSub: {
    color:'grey',
    fontSize: 15,
    fontWeight: 'bold',
  },

  basicInform:{
    flexDirection: 'column'
  },

  information:{
    marginLeft:10,
    justifyContent:'center'
  },

  review : {
    justifyContent: 'space-around',
    height:200,
    padding:10
  }
})
