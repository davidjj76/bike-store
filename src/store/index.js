import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import * as reducers from './reducers';

const reducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools;
const middleware = [ReduxThunk, ReduxLogger];

export function configureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
}
