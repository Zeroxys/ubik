import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class ProfileView extends Component {
  constructor(props){
    super(props)
    profile : this.props.profileInfo
  }

  render(){
    return(
    <View style={styles.container}>
      <Text>{this.profile}</Text>
      <Text>dasdasdsa</Text>
      <Image style={styles.img} source={{uri: 'https://ep01.epimg.net/elpais/imagenes/2016/08/23/estilo/1471959470_244538_1471959574_miniatura_normal.jpg'}}/>
    </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex:1,
  },
  img : {
    width : 100,
    height : 100
  }
})
