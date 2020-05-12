import * as TYPES from './types';

export const setBikes = bikes => ({
  type: TYPES.SET_BIKES,
  bikes,
});

export const setFilter = filter => ({
  type: TYPES.SET_FILTER,
  filter,
});

export const addToCart = (bikeId, quantity = 1) => ({
  type: TYPES.ADD_TO_CART,
  bikeId,
  quantity,
});

export const removeFromCart = (bikeId, quantity = 1) => ({
  type: TYPES.REMOVE_FROM_CART,
  bikeId,
  quantity,
});

export const checkoutCart = () => ({
  type: TYPES.CHECKOUT_CART,
});
