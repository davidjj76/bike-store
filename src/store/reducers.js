import { combineReducers } from 'redux';

import { BIKE_FILTERS } from '../constants';
import * as TYPES from './types';

const initialState = {
  bikes: [],
  filter: BIKE_FILTERS.ALL,
  cart: {},
};

const bikes = (state = initialState.bikes, action) => {
  switch (action.type) {
    case TYPES.SET_BIKES:
      return action.bikes;
    case TYPES.ADD_TO_CART:
      return state.map(bike => {
        if (bike.id === action.bikeId) {
          return {
            ...bike,
            stock: bike.stock - action.quantity,
          };
        }
        return bike;
      });
    case TYPES.REMOVE_FROM_CART:
      return state.map(bike => {
        if (bike.id === action.bikeId) {
          return {
            ...bike,
            stock: bike.stock + action.quantity,
          };
        }
        return bike;
      });

    default:
      return state;
  }
};

const filter = (state = initialState.filter, action) => {
  switch (action.type) {
    case TYPES.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const cart = (state = initialState.cart, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      return {
        ...state,
        [action.bikeId]: (state[action.bikeId] || 0) + action.quantity,
      };
    case TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        [action.bikeId]: 0,
      };

    case TYPES.CHECKOUT_CART:
      return initialState.cart;

    default:
      return state;
  }
};

const reducer = combineReducers({
  bikes,
  filter,
  cart,
});

export default reducer;
