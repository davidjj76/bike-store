import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { bikes, filter, cart } from './reducers';

const reducer = combineReducers({
  bikes,
  filter,
  cart,
});

export function configureStore(preloadedState) {
  const store = createStore(reducer, preloadedState, composeWithDevTools());
  return store;
}
