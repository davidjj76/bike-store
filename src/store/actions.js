import {
  SET_BIKES,
  SET_BIKES_FILTER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_CART,
} from './types';

export const setBikes = bikes => ({
  type: SET_BIKES,
  bikes,
});

export const setBikesFilter = bikesFilter => ({
  type: SET_BIKES_FILTER,
  bikesFilter,
});

export const addToCart = itemId => ({
  type: ADD_TO_CART,
  itemId,
});

export const removeFromCart = itemId => ({
  type: REMOVE_FROM_CART,
  itemId,
});

export const checkoutCart = () => ({
  type: CHECKOUT_CART,
});
