import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from './reducers';

export function configureStore(preloadedState) {
  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeWithDevTools(),
  );
  return store;
}
