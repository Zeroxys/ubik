import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, SectionList, VirtualizedList } from 'react-native';
import BoxItems from '../boxEvents/boxItems'

export default class ListAllEventsView extends Component {
  constructor(props){
    super()
    this.data = props.datos
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(item){
    return (
      <BoxItems data = {item}/>
    )
  }

  render(){
    return (
      <View>
        <FlatList
          showsHorizontalScrollIndicator={true}
          data={this.data}
          renderItem = { ({item}) => this.renderItem(item) }/>
      </View>    
    )
  }
}

const styles = StyleSheet.create({
  listItems : {
    flexDirection: 'row',
    backgroundColor: 'yellow'
  }
})
