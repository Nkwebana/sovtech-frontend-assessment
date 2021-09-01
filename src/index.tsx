import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
} from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from 'styled-components';

import { cache } from './cache';
import App from './App';
import GlobalStyles from './global-styles';
import { store } from './store';
import { theme } from './utils/themes';
import { APOLLO_SERVER_API_URL } from './constants';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: APOLLO_SERVER_API_URL,
});

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Router>
            <GlobalStyles />
            <App />
          </Router>
        </ApolloProvider>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
