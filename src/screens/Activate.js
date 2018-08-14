import React, { Component } from 'react';
import {
	StyleSheet,
    Linking
} from 'react-native';
import {
    Container,
    Content,
    Text,
  } from 'native-base';

import { activate } from "../../utils/auth";

export default class Activate extends Component {
    constructor(props){
        super(props);
        this.handleOpenURL = this.handleOpenURL.bind(this);
    }

    static navigationOptions = {
        header: null,
    };

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
                console.log(response);
                navigate('Login');
            })
            .catch((error) => console.warn);
    }

    render(){
        return (
            <Container style={styles.wrapper}>
                <Content padder>
                    <Text style={styles.header}>Check your email to activate!</Text>
                </Content>
            </Container>
        )
    }
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#808080'
    },
    header: {
      fontSize: 40,
      color: '#fff',
      marginTop: 20,
      marginBottom: 70
    }
});