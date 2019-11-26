import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import './index.css';

import {
  setBikes,
  setFilter,
  addToCart,
  removeFromCart,
  checkoutCart,
} from './store/actions';
import { BIKE_FILTERS } from './constants';
import { BikesService } from './services';

import { configureStore } from './store';

const store = configureStore();

const printToConsole = () => console.log(store.getState());

store.subscribe(printToConsole);
printToConsole();

store.dispatch(setBikes(BikesService.getAllBikes()));
store.dispatch(setFilter(BIKE_FILTERS.MOUNTAIN));
store.dispatch(addToCart('1', 1));
store.dispatch(addToCart('2', 4));
store.dispatch(removeFromCart('1', 1));
store.dispatch(setFilter(BIKE_FILTERS.ROAD));
store.dispatch(checkoutCart());

ReactDOM.render(<Root />, document.getElementById('root'));
