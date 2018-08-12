import React, { Component } from 'react';

import {
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Button,
  Container,
  Content,
  Footer,
  Header,
  Left,
  TouchableHighlight
} from 'native-base';

import Login from './src/screens/Login.js'

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'Login',
          component: Login
        }}
        style={{flex: 1}} />
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
});