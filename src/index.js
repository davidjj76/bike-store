import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import './index.css';

import { configureStore } from './store';
import BikesService from './services/Bikes';
import {
  setBikes,
  setFilter,
  addToCart,
  removeFromCart,
  checkoutCart,
} from './store/actions';
import { BIKE_FILTERS } from './constants';

const store = configureStore();
store.dispatch(setBikes(BikesService.getAllBikes()));
store.dispatch(setFilter(BIKE_FILTERS.MOUNTAIN));
store.dispatch(addToCart('1', 2));
store.dispatch(removeFromCart('1', 2));
store.dispatch(addToCart('2', 3));
store.dispatch(addToCart('1', 2));
store.dispatch(addToCart('2', 1));
store.dispatch(checkoutCart());

ReactDOM.render(<Root />, document.getElementById('root'));
