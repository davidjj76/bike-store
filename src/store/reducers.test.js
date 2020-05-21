import * as reducers from './reducers';
import * as TYPES from './types';

describe('reducers', () => {
  describe('bikes', () => {
    test('should handle ANY action', () => {
      const action = {
        type: TYPES.ANY_ACTION,
      };
      const expectedState = [];
      expect(reducers.bikes(undefined, action)).toEqual(expectedState);
    });

    test('should handle a FETCH_BIKES_SUCCESS action', () => {
      const initialState = [];
      const bikes = [{ id: '1', stock: 10 }];
      const action = {
        type: TYPES.FETCH_BIKES_SUCCESS,
        bikes,
      };
      const expectedState = bikes;
      expect(reducers.bikes(initialState, action)).toEqual(expectedState);
    });
  });
});
