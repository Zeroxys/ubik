import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import BoxItems from './boxItems.js'
import {Router, Scene, Actions} from 'react-native-router-flux'

export default class BoxEvents extends Component {
  constructor(props) {
    super()
    this.boxType = props.data
    this.state = {
      data : null
    }

    this.renderItem = this.renderItem.bind(this)
    this.seeMore = this.seeMore.bind(this)
  }

  seeMore(datos){
    Actions.listAllEvents({datos : datos})
  }

  renderItem(item) {
    return (
      <BoxItems data = {item}/>
    )
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({
        data : [{
          key:1,
          img : 'http://www.mormonnewsroom.org/media/640x360/Latin_Event16_2015.jpg',
          name : 'Cultural',
          stars: 8,
          enter: 'free',
          rate: 'A',
          schedule : '16:00 - 17:00 hrs',
          review : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
      })
    },0)
  }

  render() {

    const datos = this.state.data
    return (
      <View>

          <View style={styles.boxInfo}>
            <Text style={styles.title}>{this.boxType.name}</Text>

            <TouchableOpacity style={styles.seeMore} onPress={() => this.seeMore(datos)}>
              <Text style={styles.seeAll}>See all</Text>
              <Icon name="ios-arrow-forward-outline" style={styles.ArrowIcon} />
            </TouchableOpacity>

          </View>

          <View style={styles.boxContent}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={datos}
              renderItem = {({item}) => this.renderItem(item)}/>
          </View>

      </View>
    );
  }
}

styles = StyleSheet.create({

  boxInfo:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,
    marginTop: 20
  },

  title:{
    fontSize: 18,
    color: '#3c3c3c'
  },

  seeMore:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:70,
  },

  textTitle:{
    fontSize:16,
    fontWeight: 'bold',
    color: 'black'
  }
})
