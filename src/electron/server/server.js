import configureStore from './config/store';

function start() {
  configureStore(state => state, { hello: 'world' });
}

export default start;
