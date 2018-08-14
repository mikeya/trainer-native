import React, { Component } from 'react';
import {
    createStackNavigator, createSwitchNavigator,
} from 'react-navigation';

import AuthLoading from "./src/screens/AuthLoading";
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Activate from './src/screens/Activate';

import Dashboard from './src/screens/Dashboard';

const AppStack = createStackNavigator(
    {
        Dashboard
    },
    {
        initialRouteName: 'Dashboard',
    }
);

const AuthStack = createStackNavigator(
    {
        Splash,
        Login,
        SignUp,
        Activate,
    },
    {
        initialRouteName: 'Splash',
    }
);

export default createSwitchNavigator(
    {
        AuthLoading,
        AppStack,
        AuthStack
    },
    {
        initialRouteName: "AuthLoading"
    }
);
