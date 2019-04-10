import React from 'react';
import { Text, View, StyleSheet, Picker, Button, TouchableHighlight, Dimensions } from 'react-native';

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: '1',
  } 

  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  async onPressLearnMore(count) {
    /*let aa =  { "id": 1, "idUsuario": 1};
    alert(count)
    let data = {
      method: 'GET',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        appoid: aa
      }),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch('https://localhost:8081/admincuGestionWeb/ModificarEstadoPyme.do', data);
    const json = await response.json();
    return dispatch(receiveAppos(json));*/
    
    /*return fetch('https://localhost:8081/admincuGestionWeb/ListarEmpresas.do')
    .then((response) =>{
      console.log("1111111111111111111111111111111111111111111111111111111111")
      response.json()
    })
    .then((responseJson) => {
      console.log("ENTRE A GECO!!")
    })
    .catch((error) =>{
      console.error(error);
    });*/

    console.log("antes de empezar fetch")

    fetch('http://192.168.10.195:8080/camel/yodoApp?param='+count, {
      method: 'GET',
    }).then((response) => response.json()).then((responseJson) => {
          console.log('ENTRE')
      })
      .catch((error) => {
        console.log(error)
      });


  } 
  
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}> ¿ Cuantos Cafés ? </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.count}
          onValueChange={(c) => this.setState({count: c})}>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />        
        </Picker>
        <TouchableHighlight style={styles.button}  >
            <Button onPress={() => this.onPressLearnMore(this.state.count)}            
            title="Aceptar"
            color="white"
            /> 
        </TouchableHighlight> 
      </View>
    );
  }
};

var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
  },
  title: {
    padding: 20,
    fontSize: 30,
  },
  picker: {
    padding: 20,
    width: width,
  },
  button: {
    width:width,
    borderRadius:10,
    backgroundColor : "#f4511e",
  },
});