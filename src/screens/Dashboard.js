import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  Text,
} from 'react-native';

import {
  Container,
  Content,
  Spinner
} from 'native-base';

const GET_USER = gql`
  {
    user {
      id
      email
    }
  }
`;

export default class Dashboard extends React.Component {
  render() {
    return (
      <Query query={GET_USER}>
        {({ loading, error, data}) => {
          if(loading){
            return (
              <Container>
                <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
                    <Spinner color='black'/>
                </Content>
            </Container>
            )
          }
          if (error) return (<Text>`Error! ${error.message}`</Text>);
          return (
            <Container>
              <Content>
                <Text>Hey there {data.user.email} with id {data.user.id}!</Text>
              </Content>
            </Container>
          )
        }}
      </Query>
    );
  }
}
