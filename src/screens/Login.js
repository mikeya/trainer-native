import React, { Component } from 'react';

import {
	View,
	TouchableHighlight
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
class Login extends React.Component {
	onLogin = () => {
		const { navigate } = this.props.navigation;
		navigation('Dashboard')
	}

	signUp = () => {
		const { navigate } = this.props.navigation;
		navigate('SignUp')
	}

	render() {
		return (
			<Container>
				<Header />
				<Content padder>
					<Form>
					  <Item>
					    <Input placeholder="Username" />
					  </Item>
					  <Item last>
					    <Input placeholder="Password" />
					  </Item>
					</Form>
					<Grid>
						<Row>
							<Col style={{ backgroundColor: '#635DB7' }}>
								<Button full onPress={this.onLogin}>
									<Text>Login</Text>
								</Button>
							</Col>
						</Row>
						<Row margin={10}>
						<TouchableHighlight onPress={this.signUp}>
							<Text>Don't have an account? Click here</Text>
						</TouchableHighlight>
						</Row>
					</Grid>
				</Content>
				<Footer />
			</Container>
		);
	}
};

export default Login