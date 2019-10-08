import * as reducers from './reducers';
import * as types from './types';

describe('bikes', () => {
  it('should return state on any action', () => {
    const initialState = reducers.initialState.bikes;
    const action = {
      type: 'ANY_ACTION',
    };
    const newState = reducers.bikes(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it('should handle a FETCH_BIKES_SUCCESS action', () => {
    const initialState = reducers.initialState.bikes;
    const action = {
      type: types.FETCH_BIKES_SUCCESS,
      bikes: ['1', '2', '3'],
    };
    const newState = reducers.bikes(initialState, action);
    expect(newState).toEqual(action.bikes);
  });

  it('should handle a ADD_TO_CART_SUCCESS action', () => {
    const initialState = [{ id: '1', stock: 10 }];
    const action = {
      type: types.ADD_TO_CART_SUCCESS,
      itemId: '1',
      quantity: 3,
    };
    const newState = reducers.bikes(initialState, action);
    expect(newState).toEqual([{ id: '1', stock: 7 }]);
  });
});
