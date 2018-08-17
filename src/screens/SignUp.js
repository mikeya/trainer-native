import React, { Component } from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';

import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  Form,
  Header,
  Icon,
	Input,
  Item,
  Left,
  Right,
  Text,
  Title,
	Label
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { signUp } from '../../utils/auth';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.signUp = this.signUp.bind(this);
    }

    static navigationOptions = () => ({
      headerStyle: {
        backgroundColor: '#808080',
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff'
    });

    signUp() {
        signUp(this.state.email, this.state.password)
            .then(() => {
                this.props.navigation.navigate('Activate');
            }).catch((error) => {
				console.warn(error)
			})
    }

    render() {

        return (
			<Container style={styles.wrapper}>
				<Content padder>
					<Text style={styles.loginText}>Sign Up</Text>
					<Form style={styles.inputForm}>
						<Item stackedLabel style={styles.inputField}>
							<Label style={styles.formText}>EMAIL ADDRESS</Label>
							<Input
								style={styles.formText}
								autoCapitalize={'none'}
								value={this.state.email}
								onChangeText={(email) => this.setState({email})}/>
						</Item>
						<Item stackedLabel>
							<Label style={styles.formText}>PASSWORD</Label>
							<Input
								style={styles.formText}
								autoCapitalize={'none'}
								secureTextEntry={true}
								value={this.state.password}
								onChangeText={(password) => this.setState({password})}/>
						</Item>
					</Form>
					<Grid>
						<Col>
							<Button block light  style={styles.loginButton} onPress={this.signUp}>
								<Text>Create Account</Text>
							</Button>
						</Col>
					</Grid>
				</Content>
			</Container>
        );
    }
};

const styles = StyleSheet.create({
  wrapper: {
  	flex: 1,
  	display: 'flex',
  	backgroundColor: '#808080'
  },
  loginText: {
    fontSize: 40,
    color: '#fff',
    marginTop: 20,
    marginBottom: 70
  },
  formText: {
    color: '#fff'
  },
  noAccountText: {
    color: '#fff'
  },
  loginButton: {
    marginBottom: 20,
    marginTop: 20
  },
  inputForm: {
  	marginBottom: 10
  },
  inputField: {
  	marginBottom: 10
  }
})