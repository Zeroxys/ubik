import React, { Component, PureComponent } from 'react';
import { StyleSheet, Text,Image, View, TouchableOpacity, Platform, Dimensions} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux'
import Spinner from 'react-native-loading-spinner-overlay';
import LoadingBox from '../loadingBox/loadingBox'
import HeartIcons from '../icons/heartIcon'

const {width, height} = Dimensions.get('window')

export default class BoxItems extends PureComponent {
  constructor(props) {
    super()
    this.infoPrev = props.data
    this.handleFunction = this.handleFunction.bind(this)
  }

  handleFunction(event){
    Actions.eventDetail({event:event})
  }

  render () {

    let review = this.infoPrev.review
    if(review.length > 50) review = review.substring(0,100)

    return (

      <View>
        <TouchableOpacity onPress={() => this.handleFunction(this.infoPrev)}>        
        
          <View style={styles.boxItem}>          
            <Image style={styles.img} source={{uri: this.infoPrev.img}}/>
            
            <View style={styles.infoBox}>
              <View style={styles.mainInformation}>
                <Text style={[styles.textTitle, styles.textColor]}>{this.infoPrev.name}</Text>
                <Text style={styles.textColor}>{review}</Text>
              </View>
            </View>

          </View>

        </TouchableOpacity>
        <HeartIcons/>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  
  img: {
    height: 200,
    width : width,
  },
  
  infoBox: {
    height: 100,
    flexDirection  : 'row',
    borderColor: '#ECECED',
    borderBottomWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  mainInformation: {
    width: 300,
    justifyContent: 'space-around',
    alignItems : 'center'
  },

  textColor : {
    color : '#87888C'
  }
})
