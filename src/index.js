import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';

import { configureStore } from './store';
import {
  setBikes,
  setBikesFilter,
  addToCart,
  removeFromCart,
  checkoutCart,
} from './store/actions';
import { BIKE_FILTERS } from './constants';
import { BikesService } from './services';

const store = configureStore();

const render = () => {
  const { getState, dispatch } = store;
  const props = {
    ...getState(),
    dispatch,
  };
  ReactDOM.render(<App {...props} />, document.getElementById('root'));
};

store.subscribe(render);

render();

store.dispatch(setBikes(BikesService.getAllBikes()));
store.dispatch(setBikesFilter(BIKE_FILTERS.MOUNTAIN));
store.dispatch(addToCart(1));
store.dispatch(addToCart(2));
store.dispatch(removeFromCart(1));
store.dispatch(setBikesFilter(BIKE_FILTERS.ROAD));
store.dispatch(checkoutCart());
