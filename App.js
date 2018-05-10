

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  Picker,
  Button,
  Image

} from 'react-native';

// either import the whole module and call as Communications.method()
import Communications from 'react-native-communications';
import {Clipboard} from 'react-native';


// or can now import single methods and call straight via the method name
// import { web, phonecall } from 'react-native-communications';
// e.g. onPress={() => { web('http://www.github.com') }}



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     value: '',
     language: '',
     
    }
    
  }

  setClipboardContent = (msg) => {
    Clipboard.setString(msg);
    };

  render() {


    return (
      
      <View style={styles.container}>

      <View style={styles.first1Block}>
      <Image
          source={require('./img/ic_launcher.png')}
        />
      <TextInput 
            style={{height: 50, width: 300, color: '#6A9736', backgroundColor: 'white', fontSize: 20, borderColor: '#6A9736', borderBottomWidth: 1, marginTop: 10}}
            value = { this.state.email }
            underlineColorAndroid={'transparent'}
            placeholder = 'Insert Email'
            onChangeText={ text => this.setState({ email: text })}
            />
      </View>
      <View style={styles.secondBlock}>
      <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 200, color: 'white'}}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <Picker.Item label="1" value="text1" />
        <Picker.Item label="2" value="text2" />
        <Picker.Item label="3" value="text3" />
        <Picker.Item label="4" value="text4" />
        <Picker.Item label="5" value="text5" />
        <Picker.Item label="6" value="text6" />
        <Picker.Item label="7" value="text7" />
        <Picker.Item label="8" value="text8" />
      </Picker>
      </View>
      <View style={styles.firstBlock}>
      <Button
          onPress={()=>this.setClipboardContent(this.state.language)} 
          title="Copy Option"
        />
      </View>
      <View style={styles.firstBlock}>
        
        <TouchableOpacity onPress={() => Communications.email([ this.state.email ],null,null,'My Subject',this.state.language)}>
          <View style={styles.holder}>
            <Text style={styles.text}>SEND EMAIL</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#6A9736',
    borderColor: '#6A9736',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  firstBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  first1Block: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  secondBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A9736',
    
  },


});
