import React, { Component } from 'react';

import {
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

class SignUp extends React.Component {
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
			<Container>
				<Header />
				<Content padder>
					<Form>
					  <Item>
					    <Input placeholder="email" value={this.state.email} onChange={(email) => this.setState({email})}/>
					  </Item>
					  <Item last>
					    <Input placeholder="password"  onChange={(password) => this.setState({password})}/>
					  </Item>
					</Form>
					<Grid>
						<Col style={{ backgroundColor: '#635DB7' }}>
							<Button full onPress={this.signUp}>
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

export default SignUp