import * as TYPES from './types';
import { getBikeQuantityInCart } from './selectors';

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

export const fetchBikes = () =>
  async function (dispatch, getState, { BikesService }) {
    dispatch(fetchBikesRequest());
    try {
      const bikes = await BikesService.getAllBikes();
      dispatch(fetchBikesSuccess(bikes));
    } catch (error) {
      dispatch(fetchBikesFailure(error));
    }
  };

export const addToCartRequest = () => ({
  type: TYPES.ADD_TO_CART_REQUEST,
});

export const addToCartSuccess = (bikeId, quantity = 1) => ({
  type: TYPES.ADD_TO_CART_SUCCESS,
  bikeId,
  quantity,
});

export const addToCartFailure = error => ({
  type: TYPES.ADD_TO_CART_FAILURE,
  error,
});

export const addToCart = bikeId =>
  async function (dispatch, getState, { BikesService }) {
    dispatch(addToCartRequest());
    try {
      await BikesService.addToCart();
      dispatch(addToCartSuccess(bikeId));
    } catch (error) {
      dispatch(addToCartFailure(error));
    }
  };

export const removeFromCartRequest = () => ({
  type: TYPES.REMOVE_FROM_CART_REQUEST,
});

export const removeFromCartSuccess = (bikeId, quantity) => ({
  type: TYPES.REMOVE_FROM_CART_SUCCESS,
  bikeId,
  quantity,
});

export const removeFromCartFailure = error => ({
  type: TYPES.REMOVE_FROM_CART_FAILURE,
  error,
});

export const removeFromCart = bikeId =>
  async function (dispatch, getState, { BikesService }) {
    dispatch(removeFromCartRequest());
    try {
      await BikesService.removeFromCart();
      const quantity = getBikeQuantityInCart(getState(), bikeId);
      dispatch(removeFromCartSuccess(bikeId, quantity));
    } catch (error) {
      dispatch(removeFromCartFailure(error));
    }
  };

export const checkoutCartRequest = () => ({
  type: TYPES.CHECKOUT_CART_REQUEST,
});

export const checkoutCartSuccess = () => ({
  type: TYPES.CHECKOUT_CART_SUCCESS,
});

export const checkoutCartFailure = error => ({
  type: TYPES.CHECKOUT_CART_FAILURE,
  error,
});

export const checkoutCartAndNavigate = () =>
  async function (dispatch, getState, { BikesService, history }) {
    dispatch(checkoutCartRequest());
    try {
      await BikesService.checkoutCart();
      dispatch(checkoutCartSuccess());
      history.push('/');
    } catch (error) {
      dispatch(checkoutCartFailure(error));
    }
  };
