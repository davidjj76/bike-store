import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import * as reducers from './reducers';

const reducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools;

const configureMiddleware = config => {
  const middlewares = [ReduxThunk.withExtraArgument(config), ReduxLogger];
  return middlewares;
};

export function configureStore(config) {
  return function (preloadedState) {
    const middlewares = configureMiddleware(config);
    const store = createStore(
      reducer,
      preloadedState,
      composeEnhancers(applyMiddleware(...middlewares))
    );
    return store;
  };
}
