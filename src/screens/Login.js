import { login } from './../../utils/auth';
import React, { Component } from 'react';
import {
	View,
	StyleSheet,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import {
  Button,
  Container,
  Content,
  Footer,
  Form,
  Input,
  Item,
  Text,
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

	login = async () => {
        try {
            const response = await login(this.state.email, this.state.password)
            await AsyncStorage.setItem("userToken", response.token)
        } catch(e ){
            console.warn(e);
        }
	};

	signUp = () => {
        this.props.navigation.navigate('SignUp')
	};

	render() {
		return (
            <Container style={styles.wrapper}>
                <Content padder>
                    <Text style={styles.loginText}>Log in</Text>
                    <Form style={styles.inputForm}>
                        <Text style={styles.formText}> EMAIL ADDRESS </Text>
                        <Item style={styles.inputField}>
                            <Input value={this.state.email}onChangeText={(email) => this.setState({email})}/>
                        </Item>
                        <Text style={styles.formText}> PASSWORD </Text>
                        <Item last>
                            <Input value={this.state.password} onChangeText={(password) => this.setState({password})}/>
                        </Item>
                    </Form>
                    <Grid>
                        <Row>
                            <Col>
                                <Button full light style={styles.loginButton} onPress={this.login}>
                                    <Text>Submit</Text>
                                </Button>
                            </Col>
                        </Row>
                        <Row margin={10}>
                            <TouchableHighlight onPress={this.signUp}>
                                <Text style={styles.noAccountText}>Don't have an account? Click here</Text>
                            </TouchableHighlight>
                        </Row>
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
    // width: 50,
    // marginLeft: 90,
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
