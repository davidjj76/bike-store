import {
  FETCH_BIKES_REQUEST,
  FETCH_BIKES_FAILURE,
  FETCH_BIKES_SUCCESS,
  // SET_BIKES,
  SET_BIKES_FILTER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_CART,
} from './types';

import BikesService from '../services/Bikes';

const fetchBikesRequest = () => ({
  type: FETCH_BIKES_REQUEST,
});

const fetchBikesFailure = error => ({
  type: FETCH_BIKES_FAILURE,
  error,
});

const fetchBikesSuccess = bikes => ({
  type: FETCH_BIKES_SUCCESS,
  bikes,
});

export function fetchBikes() {
  return function(dispatch) {
    dispatch(fetchBikesRequest());
    return BikesService.getAllBikes()
      .then(bikes => dispatch(fetchBikesSuccess(bikes)))
      .catch(error => dispatch(fetchBikesFailure(error)));
  };
}

// export const setBikes = bikes => ({
//   type: SET_BIKES,
//   bikes,
// });

export const setBikesFilter = bikesFilter => ({
  type: SET_BIKES_FILTER,
  bikesFilter,
});

export const addToCart = (itemId, quantity = 1) => ({
  type: ADD_TO_CART,
  itemId,
  quantity,
});

export const removeFromCart = (itemId, quantity) => ({
  type: REMOVE_FROM_CART,
  itemId,
  quantity,
});

export const checkoutCart = () => ({
  type: CHECKOUT_CART,
});
