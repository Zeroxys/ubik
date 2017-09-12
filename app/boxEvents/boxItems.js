import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import { StyleSheet, Text,Image, View } from 'react-native';

export default BoxItems = (props) => {
  const infoPrev = props.data
  return (
    <View style={styles.boxItem}>
      <Image style={styles.img} source={{uri: infoPrev.img}}/>
      <View style={styles.infoBox}>
        <Text style={styles.textTitle}>{infoPrev.name}</Text>
        <Text style={styles.textSubtitle}>{infoPrev.enter}</Text>
        <Text>{infoPrev.stars}</Text>
        <Icon name="ios-heart-outline" style={styles.HeartIcon}/>
        <Text>{infoPrev.reviews} Reviews</Text>
      </View>
    </View>
  );
}

styles = StyleSheet.create({

  boxItem:{
    width:200,
    height: 400,
    marginLeft : 15,
    alignItems: 'center',
  },

  HeartIcon:{
    fontSize:20,
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
  }
})
