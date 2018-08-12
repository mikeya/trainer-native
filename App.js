import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { signUp } from './utils/auth';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  signUp() {
    signUp(this.state.email, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email} />
        <TextInput 
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password} />
        <Button onPress={this.signUp.bind(this)} title="Sign Up" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, width:250 }
});
