import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import LoggedOut from './src/screens/LoggedOut';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Dashboard from './src/screens/Dashboard';

const App = createStackNavigator({
  Home: { screen: LoggedOut },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Dashboard: { screen: Dashboard }
});

export default App;