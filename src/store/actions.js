import {
  FETCH_BIKES_REQUEST,
  FETCH_BIKES_FAILURE,
  FETCH_BIKES_SUCCESS,
  // SET_BIKES,
  SET_FILTER,
  // ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_REQUEST,
  REMOVE_FROM_CART,
  // CHECKOUT_CART,
  CHECKOUT_CART_REQUEST,
  CHECKOUT_CART_SUCCESS,
} from './types';

export const fetchBikes = () => {
  return async function(dispatch, _getState, { services: { BikesService } }) {
    dispatch(fetchBikesRequest());
    try {
      const bikes = await BikesService.getAllBikes();
      dispatch(fetchBikesSuccess(bikes));
    } catch (error) {
      dispatch(fetchBikesFailure(error));
    }
  };
};

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

// const addToCart = (bikeId, quantity) => ({
//   type: ADD_TO_CART,
//   bikeId,
//   quantity,
// });

const addToCartRequest = () => ({
  type: ADD_TO_CART_REQUEST,
});

const addToCartSuccess = (bikeId, quantity) => ({
  type: ADD_TO_CART_SUCCESS,
  bikeId,
  quantity,
});

export function addToCart(bikeId, quantity = 1) {
  return function(dispatch, _getState, { services: { BikesService } }) {
    // With getState we could check stock before dispatch actions
    dispatch(addToCartRequest());
    return BikesService.addToCart().then(() =>
      dispatch(addToCartSuccess(bikeId, quantity)),
    );
  };
}
export const removeFromCart = (bikeId, quantity = 1) => ({
  type: REMOVE_FROM_CART,
  bikeId,
  quantity,
});

// export const checkoutCart = () => ({
//   type: CHECKOUT_CART,
// });

const checkoutCartRequest = () => ({
  type: CHECKOUT_CART_REQUEST,
});

const checkoutCartSuccess = () => ({
  type: CHECKOUT_CART_SUCCESS,
});

export function checkoutCart() {
  return function(dispatch, getState, { push, services: { BikesService } }) {
    const { cart } = getState();
    dispatch(checkoutCartRequest());
    return BikesService.checkOutCart(cart).then(() => {
      dispatch(checkoutCartSuccess());
      dispatch(push('/'));
    });
  };
}
