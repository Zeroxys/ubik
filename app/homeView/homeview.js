import MapView from 'react-native-maps'
import BoxEvent from '../boxEvents/boxEvents.js'
import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import Menu from '../menu/menu'
import { StyleSheet, Text, Dimensions, View, FlatList,} from 'react-native';
import axios from 'axios'

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

  handleError (err) {
    if (err) throw err
  }

  componentDidMount(){
    fetch('https://urbanica.site/api/categories', {
      method: 'GET'
    }).then( result => {
      return result.json().then( json => {
        this.setState({
          data : json
        })
      })
    }).catch(err => {
      if(err) throw err
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

