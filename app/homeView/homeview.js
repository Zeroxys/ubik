import MapView from 'react-native-maps'
import BoxEvent from '../boxEvents/boxEvents.js'
import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import Menu from '../menu/menu'
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  Dimensions,
  Image,
  View,
  FlatList,
  VirtualizedList,
  SectionList
} from 'react-native';

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
      <View style={styles.container}>

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.data}
          renderItem = {({item}) => this.renderItem(item)}/>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container : {
    justifyContent: 'space-between',
    alignItems:'flex-start',
    flexDirection: 'column',
    backgroundColor: '#d6d4e2'
  },
})

