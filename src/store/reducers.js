import { BIKE_FILTERS } from '../constants';
import * as TYPES from './types';

const initialState = {
  bikes: [],
  filter: BIKE_FILTERS.ALL,
  cart: [],
};

const updateItem = (items, updatedId, update) => {
  return items.map(item => {
    if (item.id === updatedId) {
      return {
        ...item,
        ...update(item),
      };
    }
    return item;
  });
};

export function bikes(state = initialState.bikes, action) {
  switch (action.type) {
    case TYPES.SET_BIKES:
      return action.bikes;

    case TYPES.ADD_TO_CART:
      return updateItem(state.bikes, action.bikeId, bike => ({
        stock: bike.stock - 1,
      }));

    case TYPES.REMOVE_FROM_CART:
      return updateItem(state.bikes, action.bikeId, bike => ({
        stock: bike.stock + 1,
      }));

    default:
      return state;
  }
}

export function filter(state = initialState.filter, action) {
  switch (action.type) {
    case TYPES.SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}

export function cart(state = initialState.cart, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      return [...state, action.bikeId];

    case TYPES.REMOVE_FROM_CART:
      return state.filter(bike => bike !== action.bikeId);

    case TYPES.CHECKOUT_CART:
      return initialState.cart;

    default:
      return state;
  }
}
