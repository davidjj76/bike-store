import { combineReducers } from 'redux';

import { bikes, filter, cart } from './reducers';

const reducer = combineReducers({
  bikes,
  filter,
  cart,
});
