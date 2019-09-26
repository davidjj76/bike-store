import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import * as reducers from './reducers';

const composeEnhancers = composeWithDevTools;

const middleware = [ReduxThunk, logger];

export function configureStore(preloadedState) {
  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  return store;
}
