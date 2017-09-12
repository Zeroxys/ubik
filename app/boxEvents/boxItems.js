import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component, PureComponent } from 'react';
import { StyleSheet, Text,Image, View } from 'react-native';

export default class BoxItems extends PureComponent {
  constructor(props) {
    super()
    this.infoPrev = props.data
  }

  render () {
    return (
      <View style={styles.boxItem}>
        <Image style={styles.img} source={{uri: this.infoPrev.img}}/>
        <View style={styles.infoBox}>
          <Text style={styles.textTitle}>{this.infoPrev.name}</Text>
          <Text style={styles.textSubtitle}>{this.infoPrev.enter}</Text>
          <Text>{this.infoPrev.stars}</Text>
          <View style={styles.comments}>
            <Icon name="ios-heart-outline" style={styles.HeartIcon}/>
            <Text>{this.infoPrev.reviews} Reviews</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  boxItem:{
    width:200,
    height: 400,
    marginLeft : 15,
    alignItems: 'center',
  },

  HeartIcon:{
    fontSize:25,
    color:'grey'
  },

  ArrowIcon:{
    fontSize:17,
    color:'grey'
  },

  img:{
    width: 200,
    height:280,
  },

  textTitle:{
    fontSize:16,
    fontWeight: 'bold',
    color: 'black'
  },

  textSubtitle:{
    fontSize:14,
    fontWeight: 'bold',
  },

  infoBox:{
    flex:1,
    width:200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  comments:{
    width:150,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
  }
})
