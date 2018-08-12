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
  Title
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { signUp } from '../../utils/auth';

export default class SignUp extends React.Component {
	_onLogin = () => {
	  this.props.navigation.navigate('Dashboard')
	}

	constructor(props){
	  super(props);
	  this.state = {
	    email: '',
	    password: ''
		}
		this.signUp = this.signUp.bind(this);
	}

	signUp() {
		signUp(this.state.email, this.state.password)
		.then((response) => {
				const { navigate } = this.props.navigation;
				navigate('Dashbord');
				// return response.activation_url;
		}).catch((error) => console.warn(error))
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container style={styles.wrapper}>
				<Content padder>
					<Text style={styles.loginText}>Sign Up</Text>
					<Form style={styles.inputForm}>
						<Text style={styles.formText}> EMAIL ADDRESS </Text>
					  <Item style={styles.inputField}>
					    <Input placeholder="" value={this.state.email} onChange={(email) => this.setState({email})}/>
					  </Item>
					  <Text style={styles.formText}> PASSWORD </Text>
					  <Item last>
					    <Input placeholder=""  onChange={(password) => this.setState({password})}/>
					  </Item>
					</Form>
					<Grid>
						<Col>
							<Button full light style={styles.loginButton} onPress={this.signUp}>
								<Text>Create Account</Text>
							</Button>
						</Col>
					</Grid>
				</Content>
				<Footer />
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