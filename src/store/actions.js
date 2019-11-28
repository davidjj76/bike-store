import {
  FETCH_BIKES_REQUEST,
  FETCH_BIKES_FAILURE,
  FETCH_BIKES_SUCCESS,
  // SET_BIKES,
  SET_FILTER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_CART,
} from './types';

export const fetchBikesRequest = () => ({
  type: FETCH_BIKES_REQUEST,
});

export const fetchBikesFailure = error => ({
  type: FETCH_BIKES_FAILURE,
  error,
});

export const fetchBikesSuccess = bikes => ({
  type: FETCH_BIKES_SUCCESS,
  bikes,
});

// export const setBikes = bikes => ({
//   type: SET_BIKES,
//   bikes,
// });

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
