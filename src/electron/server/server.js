import configureStore from './config/store';
import initialState from './config/initialState';
import rootReducer from '../../shared/rootReducer';

function start() {
  configureStore(rootReducer, initialState);
}

export default start;
