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
import Dashboard from './Dashboard.js'
// import createUser from '../Auth.js'

class Signup extends React.Component {
	_onLogin = () => {
	  // this.props.navigator.push({
	  //   title: 'Dashboard',
	  //   component: Dashboard
	  // });
	  fetch('http://127.0.0.1:5000/sign-up', {
	    method: 'POST',
	    headers: {
	      Accept: 'application/json',
	      'Content-Type': 'application/json',
	    },
	    body: JSON.stringify({
	      email: 'email',
	      password: 'password',
	    }).then(function(response) {
	          console.log(response)
	          callback(response)
	      }).catch(function(error){
	          console.log(error);
	      }),
	  });
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
						<Col style={{ backgroundColor: '#635DB7' }}>
							<Button full onPress={this._onLogin}>
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

export default Signup