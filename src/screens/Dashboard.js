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

export default class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>Here is the Dashboard</Text>
        </Content>
      </Container>
    );
  }
}
