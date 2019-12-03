import * as types from './types';
import * as reducers from './reducers';

it('should handle a ADD_TO_CART_SUCCESS action', () => {
  const initialState = [{ id: '1', stock: 10 }];
  const action = {
    type: types.ADD_TO_CART_SUCCESS,
    bikeId: '1',
    quantity: 3,
  };
  const expectedState = [{ id: '1', stock: 7 }];
  expect(reducers.bikes(initialState, action)).toEqual(expectedState);
});
