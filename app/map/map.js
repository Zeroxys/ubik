import React, {Component} from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'
import MapView from 'react-native-maps'
import Spinner from 'react-native-loading-spinner-overlay'

const {width,height} = Dimensions.get('window')

export default class Map extends Component {
  constructor () {
    super()
    this.state = {
      region: {
        latitude :  null,
        longitude :  null,
        longitudeDelta :  null,
        latitudeDelta :  null
      },
      error : null,
      visible : true
    }

    this.calcDelta = this.calcDelta.bind(this)
  }

  calcDelta(lat, long, accuracy, err) {
    let oneDegreeOfLongitudeMeters = 111.32
    let circunference = (40075 / 360)

    let latDelta = accuracy * ( 1 / (Math.cos(lat) * circunference))
    let lonDelta = (accuracy / oneDegreeOfLongitudeMeters)

    this.setState({
      region: {
        latitude :  lat,
        longitude :  long,
        longitudeDelta :  lonDelta,
        latitudeDelta :  latDelta
      },
      visible: false,
      error : err
    })
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        let accuracy = position.coords.accuracy
        let error = null

        this.calcDelta(latitude, longitude, accuracy, error)
    },
    (error) => this.setState({error: error.message}),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }

  render(){
    return (
    <View style={styles.container}>
      {/*<Text>{this.state.region.latitude}</Text>
      <Text>{this.state.region.longitude}</Text>
      <Text>{this.state.region.longitudeDelta}</Text>
      <Text>{this.state.region.latitudeDelta}</Text>
      <Text>{this.state.region.accuracy}</Text>
      <Text>{this.state.error}</Text>
      <Text>{this.state.visible}</Text>*/}
      <Text>{this.state.region.accuracy}</Text>
      {/*<MapView style={styles.map} region={this.state.region}/>*/}
      {this.state.region.latitude ? <MapView style={styles.map} region={this.state.region}/>:null}
    </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  test:{
    backgroundColor: 'blue'
  }
})
