import { BIKE_FILTERS } from '../constants';
import * as TYPES from './types';

const initialState = {
  bikes: [],
  filter: BIKE_FILTERS.ALL,
  cart: {},
  ui: {
    isFetching: false,
    error: null,
  },
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

export const bikes = (state = initialState.bikes, action) => {
  switch (action.type) {
    case TYPES.FETCH_BIKES_SUCCESS:
      return action.bikes;
    case TYPES.ADD_TO_CART_SUCCESS:
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

export const filter = (state = initialState.filter, action) => {
  switch (action.type) {
    case TYPES.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const cart = (state = initialState.cart, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        [action.bikeId]: (state[action.bikeId] || 0) + action.quantity,
      };
    case TYPES.REMOVE_FROM_CART:
      const newState = { ...state };
      delete newState[action.bikeId];
      return newState;

    case TYPES.CHECKOUT_CART_SUCCESS:
      return initialState.cart;

    default:
      return state;
  }
};

export const ui = (state = initialState.ui, action) => {
  switch (action.type) {
    case TYPES.FETCH_BIKES_REQUEST:
    case TYPES.ADD_TO_CART_REQUEST:
    case TYPES.CHECKOUT_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case TYPES.FETCH_BIKES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case TYPES.FETCH_BIKES_SUCCESS:
    case TYPES.ADD_TO_CART_SUCCESS:
    case TYPES.CHECKOUT_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    default:
      return state;
  }
};
