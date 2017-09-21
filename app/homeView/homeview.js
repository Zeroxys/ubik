import MapView from 'react-native-maps'
import BoxEvent from '../boxEvents/boxEvents.js'
import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import Menu from '../menu/menu'
import { StyleSheet, Text, Dimensions, View, FlatList,} from 'react-native';

const {width, height} = Dimensions.get('window') 

export default class HomeView extends Component {
  constructor() {
    super()
    this.state = {
      data : null
    }
  }

  renderItem(item){
    return (
      <BoxEvent data={item}/>
    )
  }

  componentWillMount(){
    this.setState({
      data : [
        { 
          key:1,
          name : 'Nearby'
        },
        { 
          key:2,
          name : 'Around'
        },
        { 
          key:3,
          name : 'External'
        },
      ]
    })
  }

  render() {
    return (

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.data}
          renderItem = {({item}) => this.renderItem(item)}/>

    );
  }
}

styles = StyleSheet.create({
  container : {
    backgroundColor: '#d6d4e2'
  }
})

