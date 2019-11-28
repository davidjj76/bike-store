import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter } from 'connected-react-router';

import * as reducers from './reducers';

const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};

const loggerMiddleware = createLogger();
const composeEnhancers = composeWithDevTools;

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });

export const history = createBrowserHistory();

export function configureStore(preloadedState) {
  const reducer = createRootReducer(history);
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
