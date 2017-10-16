import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import BoxItems from './boxItems.js'
import {Router, Scene, Actions} from 'react-native-router-flux'
import Search from '../search/search'


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

  componentDidMount(){
    fetch('http://10.0.3.2:5000/api/events', {
      method : 'GET'
    }).then( result => {
      return result.json().then( json => {
        this.setState({
          data : json
        })
      }).catch( err => {
        throw err
      })
    }).catch(err => {
      alert(err)
    })
  }

  render() {

    const datos = this.state.data

    return (
      <View> 
        {/*<Search/>*/}
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
