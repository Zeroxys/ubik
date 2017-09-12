import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BoxItems from './boxItems.js'
import {Router, Scene} from 'react-native-router-flux'

export default class BoxEvents extends Component {
  constructor(props) {
    super()
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(item) {
    return (
      <BoxItems data = {item}/>
    )
  }

  render() {

    const data = [{
      key:1,
      img : 'http://www.mormonnewsroom.org/media/640x360/Latin_Event16_2015.jpg',
      name : 'Cultural',
      stars: 8,
      enter: 'free',
      rate: 'A',
      schedule : '16:00 - 17:00 hrs',
      review : 'If I soon end up in a psychiatric ward, could someone please send the bill to Andrew Lloyd Webber?'
    },
    {
      key:2,
      img: 'https://kena.com/wp-content/uploads/2017/04/sep7timodia_Show_Fotos_10_Signos_Ph_Nancy_Martinez_2-759x500.jpg',
      name : 'Limited Event',
      stars: 3,
      enter: 'Cover',
      rate: 'A',
      schedule : '16:00 - 17:00 hrs',
      review : 'If I soon end up in a psychiatric ward, could someone please send the bill to Andrew Lloyd Webber?'
    },
    {
      key:3,
      img:'https://learn.uvm.edu/wordpress_3_4b/wp-content/uploads/Hackathon-655x329.jpg',
      name : 'Technology',
      stars: 16,
      enter: 'free',
      rate: 'A',
      schedule : '16:00 - 17:00 hrs',
      review : 'If I soon end up in a psychiatric ward, could someone please send the bill to Andrew Lloyd Webber?'
    },
    {
      key:4,
      img: 'http://media.lonelyplanet.com/lpi/26190/26190-2/681x454.jpg',
      name : 'Private Concert',
      stars: 16,
      enter: 'free',
      rate: 'A',
      schedule : '16:00 - 17:00 hrs',
      review : 'If I soon end up in a psychiatric ward, could someone please send the bill to Andrew Lloyd Webber?'
    }]

    const datos = data
    return (
      <View style={styles.events}>

        <View style={styles.eventsInfo}>
          <View style={styles.information}>
            <Text style={styles.title}>Nearby</Text>
            <View style={styles.seeMore}>
              <Text style={styles.seeAll}>See all</Text>
              <Icon name="ios-arrow-forward-outline" style={styles.ArrowIcon} />
            </View>
          </View>

          <View style={styles.boxContent}>
          
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={datos}
              renderItem = {({item}) => this.renderItem(item)}/>

          </View>

        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({

  events:{
    flexDirection: 'row',
  },

  eventsInfo:{
    flex:1
  },

  information:{
    display:'flex',
    flexDirection:'row',  
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10
  },

  title:{
    fontSize: 20,
    color: '#3c3c3c'
  },

  seeMore:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:70
  },

  seeAll:{
    fontSize: 16,
  },

  ArrowIcon:{
    fontSize:25,
  },

  boxContent:{
    flexDirection:'row',
  },

  HeartIcon:{
    fontSize:20,
    color:'grey'
  },

  img:{
    width: 180,
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
