import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import { StyleSheet, Text,Image, View } from 'react-native';

export default class ubik extends Component {

  render() {
    const img = 'https://images.pexels.com/photos/12574/SW_Dylan%2BRives.jpg?w=940&h=650&auto=compress&cs=tinysrgb'
    const infoPrev = {
      name : 'Dora Maria Concert',
      enter : 'free',
      stars : '2',
      reviews: 20
    }
    return (
      <View style={styles.events}>

        <View style={styles.eventsInfo}>
          <View style={styles.information}>
            <Text>Nearby</Text>
            <Text>See all  <Icon name="ios-arrow-forward-outline" style={styles.ArrowIcon} /></Text>
          </View>

          <View style={styles.boxContent}>

            <View style={styles.boxItem}>
              <Image style={styles.img} source={{uri:img}}/>
              <View style={styles.infoBox}>
                <Text style={styles.textTitle}>{infoPrev.name}</Text>
                <Text style={styles.textSubtitle}>{infoPrev.enter}</Text>
                <Text>{infoPrev.stars}</Text>
                <Icon name="ios-heart-outline" style={styles.HeartIcon}/>
                <Text>{infoPrev.reviews} Reviews</Text>
              </View>
            </View> 

            <View style={styles.boxItem}>
              <Image style={styles.img} source={{uri:img}}/>
              <View style={styles.infoBox}>
                <Text style={styles.textTitle}>{infoPrev.name}</Text>
                <Text style={styles.textSubtitle}>{infoPrev.enter}</Text>
                <Text>{infoPrev.stars}</Text>
                <Icon name="ios-heart-outline" style={styles.HeartIcon}/>
                <Text>{infoPrev.reviews} Reviews</Text>
              </View>
            </View> 

          </View>

        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({

  events:{
    flexDirection: 'column',
    flexDirection:'row',
  },

  eventsInfo:{
    flex:1
  },

  information:{
    backgroundColor: 'lightgray',
    display:'flex',
    flexDirection:'row',  
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize:20,
    padding:10
  },

  infoBox:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxContent:{
    flexDirection:'row',
  },

  boxItem:{
    width:220,
    height: 400,
    paddingLeft: 10,
    paddingRight: 10,
  },

  HeartIcon:{
    fontSize:20,
    color:'grey'
  },

  ArrowIcon:{
    fontSize:15,
    color:'grey'
  },

  img:{
    width: 220,
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
