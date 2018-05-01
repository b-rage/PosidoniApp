/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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
