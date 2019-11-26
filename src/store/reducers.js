import { combineReducers } from 'redux';

import { BIKE_FILTERS } from '../constants';
import * as TYPES from './types';

const initialState = {
  bikes: [],
  filter: BIKE_FILTERS.ALL,
  cart: {},
};

const updateBike = (bikes, updatedBikeId, update) => {
  return bikes.map(bike => {
    if (bike.id === updatedBikeId) {
      return {
        ...bike,
        ...update(bike),
      };
    }
    return bike;
  });
};

const bikes = (state = initialState.bikes, action) => {
  switch (action.type) {
    case TYPES.SET_BIKES:
      return action.bikes;
    case TYPES.ADD_TO_CART:
      return updateBike(state, action.bikeId, bike => ({
        stock: bike.stock - action.quantity,
      }));
    case TYPES.REMOVE_FROM_CART:
      return updateBike(state, action.bikeId, bike => ({
        stock: bike.stock + action.quantity,
      }));
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
      const newState = { ...state };
      delete newState[action.bikeId];
      return newState;

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
