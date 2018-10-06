import { applyMiddleware, createStore } from 'redux';
import { forwardToRenderer, triggerAlias, replayActionMain } from 'electron-redux';
import sputnik from '../middleware/sputnik';

const configureStore = (rootReducer, initialState) => {
  const store = createStore(
    rootReducer,
    initialState, // optional
    applyMiddleware(
      triggerAlias, // optional, see below
      // ...otherMiddleware,
      sputnik,
      forwardToRenderer // IMPORTANT! This goes last
    )
  );

  replayActionMain(store);

  return store;
};

export default configureStore;
