import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Linking
} from 'react-native';
import { Content, Container, Spinner } from 'native-base';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.boostrap();
    }

    boostrap = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
    };

    // Render any loading content that you like here
    render() {
        return (
        <Container>
            <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
                <Spinner color='black'/>
            </Content>
        </Container>
        );
    }
}

export default AuthLoadingScreen;
