import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from './reducers';

const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};

const loggerMiddleware = createLogger();
const composeEnhancers = composeWithDevTools;

export function configureStore(preloadedState) {
  const reducer = combineReducers(reducers);
  const middlewares = [thunkMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  return store;
}
