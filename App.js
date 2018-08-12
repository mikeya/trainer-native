import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Dashboard from './src/screens/Dashboard';

const App = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Dashboard: { screen: Dashboard }
});

export default App;