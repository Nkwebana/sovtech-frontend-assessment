import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
} from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';

import { cache } from './cache';
import App from './App';
import GlobalStyles from './global-styles';
import { store } from './store';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:8080/',
});

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <GlobalStyles />
          <App />
        </Router>
      </ApolloProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
