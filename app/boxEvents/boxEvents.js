import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BoxItems from './boxItems.js'

export default class BoxEvents extends Component {
  constructor(props) {
    super()
    this.getBoxes = this.getBoxes.bind(this)
  }

  getBoxes(){
    return(Array(5).fill)    
  }

  render() {

    const data = {
      img : 'https://static.pexels.com/photos/167605/pexels-photo-167605.jpeg',
      name : 'Concert',
      stars: 2,
      enter: 'free'
    }

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
            
          <BoxItems data = {data}/>
          <BoxItems data = {data}/>

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
    display:'flex',
    flexDirection:'row',  
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize:20,
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

  infoBox:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxContent:{
    flexDirection:'row',
  },

  boxItem:{
    width:200,
    height: 400,
    marginLeft : 15
  },

  HeartIcon:{
    fontSize:20,
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
