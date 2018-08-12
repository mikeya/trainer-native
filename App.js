import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoggedOut from './src/screens/LoggedOut.js'

export default class App extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: ''
  //   }
  // }

  // signUp() {
  //   signUp(this.state.email, this.state.password);
  // }

  render() {
    return (
      // <NavigatorIOS
      //   initialRoute={{
      //     title: 'Loggedout',
      //     component: Loggedout
      //   }}
      //   style={{flex: 1}} />
      <LoggedOut />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
//   });
