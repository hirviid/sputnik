import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from './config/store';
import theme from './config/theme';
import configuration from './packages/configuration';

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={configureStore(state => state)}>
      <configuration.Configurations />
    </Provider>
  </ThemeProvider>
);

export default App;
