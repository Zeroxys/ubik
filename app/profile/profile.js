import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions, VirtualizedList} from 'react-native'
import FacebookButton from '../facebook/facebookButton' 
export default class ProfileView extends Component {
  constructor(props){
    super(props)
    profile : this.props.profileInfo
  }

  render(){
    return(
    <VirtualizedList>
    <View style={styles.container}>
      <View style = {styles.title}>
        <Text>Profile</Text>
      </View>
      <View style = {styles.profile}>
        <Image style={styles.img} 
          source={{uri: 'https://ep01.epimg.net/elpais/imagenes/2016/08/23/estilo/1471959470_244538_1471959574_miniatura_normal.jpg'}}>
          <Text style={ styles.personName}>User name</Text>
        </Image>
      </View>
      <View style = {styles.profile}>
        <FacebookButton/>
      </View>
    </View>
    </VirtualizedList>
    )
  }
}

const { height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#EEEEEE'
  },

  title: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BDBDBD',
    height:40,
  },
  profile:{
    justifyContent: 'space-around',
    alignItems: 'center',
    flex:1
  },
  personName:{
    flex:1,
    justifyContent:'flex-end',
    alignItems: 'flex-end'
  },
  img : {
    flex:1,
    width : width,
    height : 175,
    
  }
})
