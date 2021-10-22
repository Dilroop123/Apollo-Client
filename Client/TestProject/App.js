import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';

import {onError} from '@apollo/client/link/error';
import UserList from './Components/UserList';

// const errorLink = onError(({graphqlErrors, networkError}) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({message, location, path}) => {
//       console.log(message);
//     });
//   }
// });

// const link = from([
//   errorLink,
//   new HttpLink({uri: 'http://localhost:5000/graphql'}),
// ]);

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link,
// });

const client = new ApolloClient({
  uri: 'http://192.168.2.13:5000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserList />
    </ApolloProvider>
  );
};

export default App;
