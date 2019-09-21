import {
  SET_BIKES,
  SET_FILTER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_CART,
} from './types';

export const setBikes = bikes => ({
  type: SET_BIKES,
  bikes,
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter,
});

export const addToCart = bikeId => ({
  type: ADD_TO_CART,
  bikeId,
});

export const removeFromCart = bikeId => ({
  type: REMOVE_FROM_CART,
  bikeId,
});

export const checkoutCart = () => ({
  type: CHECKOUT_CART,
});
