import * as TYPES from './types';

export const fetchBikesRequest = () => ({
  type: TYPES.FETCH_BIKES_REQUEST,
});

export const fetchBikesFailure = error => ({
  type: TYPES.FETCH_BIKES_FAILURE,
  error,
});

export const fetchBikesSuccess = bikes => ({
  type: TYPES.FETCH_BIKES_SUCCESS,
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
