import React, { Component } from 'react';
import { Root } from 'native-base';
import { ApolloProvider } from "react-apollo";
import Router from './Router';
import ApolloClient from './ApolloClient'

export default () => (
  <ApolloProvider client={ApolloClient}r>
    <Root>
      <Router/>
    </Root>
  </ApolloProvider>
);