import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './config/store';
import theme from './config/theme';
import configuration from './packages/configuration';
import monitor from './packages/monitor';

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={configureStore(state => state)}>
      <Router>
        <React.Fragment>
          <Route path="/" exact component={configuration.Configurations} />
          <Route path="/list/:id" exact component={monitor.List} />
        </React.Fragment>
      </Router>
    </Provider>
  </ThemeProvider>
);

export default App;
