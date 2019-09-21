import { combineReducers } from 'redux';

import { FILTERS } from '../constants';
import * as TYPES from './types';

const initialState = {
  bikes: [],
  filter: FILTERS.ALL,
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

function bikes(state = initialState.bikes, action) {
  switch (action.type) {
    case TYPES.SET_BIKES:
      return action.bikes;

    case TYPES.ADD_TO_CART:
      return updateItem(state, action.itemId, item => ({
        stock: item.stock - 1,
      }));

    case TYPES.REMOVE_FROM_CART:
      return updateItem(state, action.itemId, item => ({
        stock: item.stock + 1,
      }));

    default:
      return state;
  }
}

function filter(state = initialState.filter, action) {
  switch (action.type) {
    case TYPES.SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}

function cart(state = initialState.cart, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      return [...state, action.itemId];

    case TYPES.REMOVE_FROM_CART:
      return state.filter(item => item !== action.itemId);

    case TYPES.CHECKOUT_CART:
      return initialState.cart;

    default:
      return state;
  }
}

export default combineReducers({
  bikes,
  filter,
  cart,
});
