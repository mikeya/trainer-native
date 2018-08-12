import React, { Component } from 'react';
import {
	Image,
	StyleSheet,
	View
} from 'react-native';
import {
	Button,
	Text
} from 'native-base';

export default class LoggedOut extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
		  <View style={styles.wrapper}>
		  	<Image style={styles.logo}
		  	  source={require('../img/Trainer.png')}
		  	/>
		  	<Text style={styles.welcomeText}>Welcome to Trainer!</Text>
		  	<Button rounded light style={styles.loginButton} onPress={() => navigate('Login')}>
		  	  <Text>Log In</Text>
		  	</Button>
		  	<Button rounded bordered style={styles.createAccountButton} onPress={() => navigate('SignUp')}>
		  	  <Text style={styles.createAccountText}>Create Account</Text>
		  	</Button>
		  </View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
	  flex: 1,
	  display: 'flex',
	  backgroundColor: '#808080'
	},
	logo: {
	  width: 150,
	  height: 150,
	  marginTop: 100,
	},
	welcomeText: {
	  fontSize: 30,
	  fontWeight: '300',
	  color: '#fff',
	  marginLeft: 30,
	  marginBottom: 50
	},
	loginButton: {
	  width: 300,
	  marginLeft: 30,
	  marginBottom: 20
	},
	createAccountButton: {
	  borderColor: '#fff',
	  width: 300,
	  marginLeft: 30,
	},
	createAccountText: {
	  color: '#fff',
	  alignItems: 'center'
	}
})