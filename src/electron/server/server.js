import configureStore from './config/store';
import initialState from './config/initialState';

function start() {
  configureStore(state => state, initialState);
}

export default start;
