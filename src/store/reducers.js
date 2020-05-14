import * as TYPES from './types';

const initialState = {
  bikes: [],
  cart: {},
  ui: {
    error: null,
    isFetching: false,
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
    case TYPES.FETCH_BIKES_SUCCESS:
      return action.bikes;

    case TYPES.ADD_TO_CART_SUCCESS:
      return updateItem(state, action.bikeId, bike => ({
        stock: bike.stock - action.quantity,
      }));

    case TYPES.REMOVE_FROM_CART_SUCCESS:
      return updateItem(state, action.bikeId, bike => ({
        stock: bike.stock + action.quantity,
      }));

    default:
      return state;
  }
}

export function cart(state = initialState.cart, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        [action.bikeId]: (state[action.bikeId] || 0) + action.quantity,
      };

    case TYPES.REMOVE_FROM_CART_SUCCESS:
      const { [action.bikeId]: _, ...newCart } = state;
      return newCart;

    case TYPES.CHECKOUT_CART_SUCCESS:
      return initialState.cart;

    default:
      return state;
  }
}

// export function ui(state = initialState.ui, action) {
//   switch (action.type) {
//     case TYPES.FETCH_BIKES_REQUEST:
//     case TYPES.CHECKOUT_CART_REQUEST:
//     case TYPES.ADD_TO_CART_REQUEST:
//     case TYPES.REMOVE_FROM_CART_REQUEST:
//       return {
//         ...state,
//         isFetching: true,
//         error: null,
//       };

//     case TYPES.FETCH_BIKES_FAILURE:
//     case TYPES.CHECKOUT_CART_FAILURE:
//     case TYPES.ADD_TO_CART_FAILURE:
//     case TYPES.REMOVE_FROM_CART_FAILURE:
//       return {
//         ...state,
//         isFetching: false,
//         error: action.error,
//       };

//     case TYPES.FETCH_BIKES_SUCCESS:
//     case TYPES.CHECKOUT_CART_SUCCESS:
//     case TYPES.ADD_TO_CART_SUCCESS:
//     case TYPES.REMOVE_FROM_CART_SUCCESS:
//       return {
//         ...state,
//         isFetching: false,
//         error: null,
//       };

//     default:
//       return state;
//   }
// }

// Alternative ui reducer
// evaluate by regex if action ends by
// _REQUEST
// _SUCCESS
// _FAILURE
export function ui(state = initialState.ui, action) {
  if (/_REQUEST$/.test(action.type)) {
    return {
      ...state,
      isFetching: true,
      error: null,
    };
  }

  if (/_SUCCESS$/.test(action.type)) {
    return {
      ...state,
      isFetching: false,
      error: null,
    };
  }

  if (/_FAILURE$/.test(action.type)) {
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  }

  return state;
}
