import { BIKE_FILTERS } from '../constants';
import * as TYPES from './types';

const initialState = {
  bikes: [],
  filter: BIKE_FILTERS.ALL,
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_BIKES:
      return {
        ...state,
        bikes: action.bikes,
      };

    case TYPES.SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    case TYPES.ADD_TO_CART:
      return {
        ...state,
        bikes: state.bikes.map(bike => {
          if (bike.id === action.bikeId) {
            return {
              ...bike,
              stock: bike.stock - 1,
            };
          }
          return bike;
        }),
        cart: [...state.cart, action.bikeId],
      };

    case TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        bikes: state.bikes.map(bike => {
          if (bike.id === action.bikeId) {
            return {
              ...bike,
              stock: bike.stock + 1,
            };
          }
          return bike;
        }),
        cart: state.cart.filter(bike => bike !== action.bikeId),
      };

    case TYPES.CHECKOUT_CART:
      return {
        ...state,
        cart: initialState.cart,
      };

    default:
      return state;
  }
}
