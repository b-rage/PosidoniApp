/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/* import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import InsertEmail from './components/InsertEmail';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.firstBlock}>
          <InsertEmail />
        </View>
        <View style={styles.secondBlock}>
          <Text>TAKE A PHOTO</Text>
        </View>
        <View style={styles.firstBlock}>
          <Text style={styles.textTitol}>SELECT TEXT</Text>
        </View>
        <View style={styles.firstBlock}>
          <Text style={styles.textTitol}>SEND EMAIL !!!!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  textTitol: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  firstBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#67CDDC',
  },
  secondBlock: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E7DF',
    
  },


});
 */




import React, { Component } from 'react';
import InsertEmail from './components/InsertEmail';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

// either import the whole module and call as Communications.method()
import Communications from 'react-native-communications';

// or can now import single methods and call straight via the method name
// import { web, phonecall } from 'react-native-communications';
// e.g. onPress={() => { web('http://www.github.com') }}



export default class App extends Component {

  onChangeText = (emailAd) => {
    const newVal = emailAd;
    this.setState({emailAd: newVal});
  }

  render() {
    return (
      
      <View style={styles.container}>

      <View style={styles.first1Block}>
        <InsertEmail onChangeText={this.onChangeText} emailAd={this.props.emailAd} />
      </View>
      <View style={styles.secondBlock}>
        <Text>TAKE A PHOTO</Text>
      </View>
      <View style={styles.firstBlock}>
        <Text style={styles.textTitol}>TEXT</Text>
      </View>
      <View style={styles.firstBlock}>
        
        <TouchableOpacity email={this.props.emailAd} onPress={() => Communications.email(['brag@libero.it'],null,null,'My Subject','My body text')}>
          <View style={styles.holder}>
            <Text style={styles.text}>Send an email</Text>
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
  textTitol: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  firstBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#67CDDC',
  },
  first1Block: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#67CDDC',
  },
  secondBlock: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E7DF',
    
  },


});
