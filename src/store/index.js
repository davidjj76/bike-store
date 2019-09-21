import { createStore } from 'redux';

import reducer from './reducers';

export function configureStore(preloadedState) {
  const store = createStore(reducer, preloadedState);
  return store;
}
