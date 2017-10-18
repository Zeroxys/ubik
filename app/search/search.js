import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableHighlight, ScrollView, Image} from 'react-native'
import t from 'tcomb-form-native'
import moment from 'moment'


const Form = t.form.Form
const maxDate = new Date()
const options = {
  fields : {
    fechaEvento : {
      config : {
        format: (date) => moment(date).format('DD/MM/YYYY'), 
      },
      maximunDate : maxDate,
      mode : 'date',
      blurOnSubmit: true
    },
    horaDelEvento : {
      config : {
        format : (date) => moment(date).add(1, 'days').calendar()
      },
      mode: 'time',
      blurOnSubmit : true
    }
  }
}
/*Form.stylesheet.dateValue.normal.borderColor = '#d0d2d3';
Form.stylesheet.dateValue.normal.backgroundColor = '#f0f1f1';
Form.stylesheet.dateValue.normal.borderWidth = 1;*/

const Person = t.struct({
  NombreDelEvento : t.String,              // a required string
  descripcion: t.maybe(t.String),  // an optional string
  ubicacionActual: t.Boolean,        // a boolean
  horaDelEvento : t.Date,      // a calendar date
  fechaEvento: t.Date          // a calendar date
})

const Busqueda = t.struct({
  search : t.String
})


export default class Search extends Component {
  constructor(props){
    super()
    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue()
    if (value) { // if validation fails, value will be null
      console.warn(value) // value here is an instance of Person
    }
  }

  render () {
    return (
    <ScrollView>
      <View>
        <View style={styles.content}>
          <Image  style={styles.backImage} source={{uri : 'http://www.jpboneyard.com/_img/hoops-city.png'}}>
            <Text style={styles.titleHeader}>URBANIK</Text>
            <Text style={styles.titleSubHeader}>Comparte tus eventos favoritos con los demas</Text>
          </Image>
        </View>
        
          <View style={styles.container}>
            
            <Form
                ref="form"
                type={Person}
                options={options}
              />
              <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Publicar</Text>
              </TouchableHighlight>
          </View>    
      </View>
    </ScrollView>
    )
  }
}

/*const styles = new StyleSheet.create({
  content : {
    backgroundColor : '#002662'
  }
})*/

const styles = StyleSheet.create({
  content : {
    height:250,
    backgroundColor : '#002662',
  },

  backImage : {
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleHeader:{
    color: 'white',
    fontSize: 50,
    fontWeight: '600'
  },

  titleSubHeader : {
    color: 'white'
  },

  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },

  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderRadius: 8,
    justifyContent: 'center'
  }
})