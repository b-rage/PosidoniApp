/* import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class InsertEmail extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '' };
    
  }

  
  

  render() {
    return (
      <View>
        <Text style={{fontSize: 23, color: 'white'}}>Insert Email</Text>
        <TextInput
        style={{height: 50, width: 300, color: 'white', fontSize: 23, borderColor: 'white', borderBottomWidth: 1}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
        underlineColorAndroid={'transparent'}
        />
      </View>
    );
    console.log(this.state.email);
  }
} */


import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class InsertEmail extends Component {

  constructor(props) {
    super(props);
    this.state = { emailAd: '' };
    
  }

  onChangeText = () => {
    const emailAd = 'Bragi'; // somehow calculate new value
    this.props.onChangeText(emailAd),
    this.setState({emailAd})
  }
  

  render() {
    return (
      <View>
        <Text style={{fontSize: 23, color: 'white'}}>Insert Email</Text>
        <TextInput
        style={{height: 50, width: 300, color: 'white', fontSize: 23, borderColor: 'white', borderBottomWidth: 1}}
        onChange={this.onChangeText}
        value={this.props.emailAd}
        underlineColorAndroid={'transparent'}
        />
      </View>
    );
    console.log(this.state.emailAd);
  }
}


