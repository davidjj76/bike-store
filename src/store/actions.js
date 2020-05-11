import * as TYPES from './types';

export const setBikes = bikes => ({
  type: TYPES.SET_BIKES,
  bikes,
});

export const setFilter = filter => ({
  type: TYPES.SET_FILTER,
  filter,
});

export const addToCart = bikeId => ({
  type: TYPES.ADD_TO_CART,
  bikeId,
});

export const removeFromCart = bikeId => ({
  type: TYPES.REMOVE_FROM_CART,
  bikeId,
});

export const checkoutCart = () => ({
  type: TYPES.CHECKOUT_CART,
});
