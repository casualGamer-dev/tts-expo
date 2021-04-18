import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View ,TouchableOpacity} from 'react-native';
import * as Speech from 'expo-speech';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text:'enter a word',
    };
  }
    speak = () => {
      
    var thingToSay = this.state.text;
    if(thingToSay=="enter a word"||thingToSay==" "){
      thingToSay=" "
    }
    else{
      Speech.speak(thingToSay);
      this.setState({
        text:" "
      })
    }
    
  };
  render(){
  return (
    <View style={styles.container}>
     <TextInput style={styles.inputBox} onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
          >

     </TextInput>
     <TouchableOpacity style={styles.ButtonBox} onPress={this.speak}>
       <Text>SPEAK</Text>
     </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  ButtonBox: {
    marginTop: 50,
    width: '50%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
     backgroundColor:"orange"
  },

});
