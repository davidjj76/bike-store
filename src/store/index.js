import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

export function configureStore() {
  const reducer = combineReducers(reducers);
  const store = createStore(reducer);
  return store;
}
