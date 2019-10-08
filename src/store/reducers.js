// import { BIKE_FILTERS } from '../constants';
import * as TYPES from './types';

export const initialState = {
  bikes: [],
  // bikesFilter: BIKE_FILTERS.ALL,
  cart: {},
  ui: {
    isFetching: false,
    error: null,
  },
};

const updateItem = (items, updatedId, update) => {
  return items.map(item => {
    if (item.id === updatedId) {
      return {
        ...item,
        ...update(item),
      };
    }
    return item;
  });
};

export function bikes(state = initialState.bikes, action) {
  switch (action.type) {
    // case TYPES.SET_BIKES:
    //   return action.bikes;

    case TYPES.FETCH_BIKES_SUCCESS:
      return action.bikes;

    // case TYPES.ADD_TO_CART:
    //   return updateItem(state, action.itemId, item => ({
    //     stock: item.stock - action.quantity,
    //   }));

    case TYPES.ADD_TO_CART_SUCCESS:
      return updateItem(state, action.itemId, item => ({
        stock: item.stock - action.quantity,
      }));

    case TYPES.REMOVE_FROM_CART:
      return updateItem(state, action.itemId, item => ({
        stock: item.stock + action.quantity,
      }));

    default:
      return state;
  }
}

// export function bikesFilter(state = initialState.bikesFilter, action) {
//   switch (action.type) {
//     case TYPES.SET_BIKES_FILTER:
//       return action.bikesFilter;

//     default:
//       return state;
//   }
// }

export function cart(state = initialState.cart, action) {
  switch (action.type) {
    // case TYPES.ADD_TO_CART:
    //   return {
    //     ...state,
    //     [action.itemId]: (state[action.itemId] || 0) + action.quantity,
    //   };

    case TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        [action.itemId]: (state[action.itemId] || 0) + action.quantity,
      };

    case TYPES.REMOVE_FROM_CART:
      const newState = { ...state };
      delete newState[action.itemId];
      return newState;

    // case TYPES.CHECKOUT_CART:
    //   return initialState.cart;

    case TYPES.CHECKOUT_CART_SUCCESS:
      return initialState.cart;

    default:
      return state;
  }
}

export function ui(state = initialState.ui, action) {
  switch (action.type) {
    case TYPES.FETCH_BIKES_REQUEST:
    case TYPES.CHECKOUT_CART_REQUEST:
    case TYPES.ADD_TO_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case TYPES.FETCH_BIKES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case TYPES.FETCH_BIKES_SUCCESS:
    case TYPES.CHECKOUT_CART_SUCCESS:
    case TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
      };

    default:
      return state;
  }
}
