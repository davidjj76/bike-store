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

export const addToCart = (bikeId, quantity = 1) => ({
  type: ADD_TO_CART,
  bikeId,
  quantity,
});

export const removeFromCart = (bikeId, quantity = 1) => ({
  type: REMOVE_FROM_CART,
  bikeId,
  quantity,
});

export const checkoutCart = () => ({
  type: CHECKOUT_CART,
});
