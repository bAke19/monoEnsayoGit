import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {Header} from 'react-native-elements';
import db from './localdb';


export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
      texto : '',
      displayText: '',
      chunks: ["th", "e"],
      soundWord: []
    }
  }
  

  render(){
    return (
      <View style={styles.container}>
        <Header
          backgroundColor='#F3BB25'
          centerComponent={{
            text:'Mono Fragmentado',
            style: {color: "#fff", fontSize: 20}
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({texto: text})
          }}
          value = {this.state.texto}
          />

        <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              var word = this.state.text.toLowerCase().trim();
              db[word] ? (this.setState({ chunks: db[word].chunks }), this.setState({ soundWord: db[word].chunks }) ) : console.log("No existe esta palabra en la base de datos")
            }}>

            <Text style={styles.buttonText}>GO</Text>

        </TouchableOpacity>
        <View>
          {this.state.chunks.map(item => {
            console.log(item)
            return (
              <TouchableOpacity
              style={styles.chunkButton}
              >
              <Text style={styles.displayText}>{item}</Text>
              </TouchableOpacity>
              );
          })}
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
});
