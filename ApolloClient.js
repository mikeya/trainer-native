import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Observable } from 'apollo-link';
import { AsyncStorage } from 'react-native';
import Base64 from 'base-64';
import { onError } from "apollo-link-error";

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql',
  });
  
  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const userToken = await AsyncStorage.getItem('userToken');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        'Authorization': userToken ? `Basic ${Base64.encode(userToken+':')}` : "",
      }
    }
  });

  const erroLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
  
    if (networkError) {
        console.log(`[Network error]: ${networkError}`)
        if (networkError.statusCode === 401) {
            return new Observable(async observer => {
                AsyncStorage.removeItem('userToken')
                .then(() => {
                    const subscriber = {
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer)
                      };
                    forward(operation).subscribe(subscriber)
                });
            })
        }
    };
  });
  
  const link = authLink.concat(erroLink);

  const client = new ApolloClient({
    link: link.concat(httpLink),
    cache: new InMemoryCache()
  });

export default client;

