import { applyMiddleware, compose, createStore } from 'redux';
import forwardToMain from './middleware/forwardToMain';
import replayActionRenderer from './helpers/replayActionRenderer';
// import { forwardToMain, replayActionRenderer, getInitialStateRenderer } from 'electron-redux';

const configureStore = (rootReducer, initialState) => {
  // const initialState = getInitialStateRenderer();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        forwardToMain // IMPORTANT! This goes first
        // ...otherMiddleware
      )
    )
  );
  replayActionRenderer(store);

  return store;
};

export default configureStore;
