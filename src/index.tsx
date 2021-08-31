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

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:8080/',
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
