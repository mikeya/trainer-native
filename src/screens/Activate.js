import React, { Component } from 'react';
import {
    Linking,
    View
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { activate } from "../../utils/auth";
import { Toast } from 'native-base';

class Activate extends Component {
    constructor(props){
        super(props);
        this.handleOpenURL = this.handleOpenURL.bind(this);
    }

    componentDidMount() {
        Linking.getInitialURL().then((url) => {
            if (url) {
                console.log('Initial url is: ' + url);
            }
        }).catch(err => console.error('An error occurred', err));
        Linking.addEventListener('url', this.handleOpenURL);
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL(event) {
        const activationKey = event.url.replace(/.*activate\//,'');
        const { navigate } = this.props.navigation;

        activate(activationKey)
            .then((response) => {
                Toast.show({
                    text: 'Your account is activated! You can login.',
                    type: 'success',
                    duration: 5000
                })
                navigate('Login');
            })
            .catch((error) => {
                Toast.show({
                    text: 'There was an error activating your account.',
                    type: 'danger',
                    duration: 5000
                })
                navigate('Login');
            });
    }

    render(){
        return this.props.children;
    }
};

export default withNavigation(Activate);