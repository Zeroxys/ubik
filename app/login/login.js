import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, Button} from 'react-native'

export default class LoginView extends Component {
  constructor(){
    super()
    this.onPress = this.onPress.bind(this)
  }

  onPress(){

  }

  render(){
    return(
      <Image style={styles.container} source = {{uri: 'http://www.rockandpop.cl/wp-content/uploads/2016/01/color-run.jpg'}}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source = {{uri: 'http://www.urbanacres.com/wp-content/themes/urbanacres-1.0.0/assets/img/urban-acres-logo.png'}}/>
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20
  },
  logoContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  img:{
    flex:1,
    resizeMode:'cover',
  },

  socialContain:{
    flex:1,
    backgroundColor:'red',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo:{
    width: 150,
    height: 150
  }
})
