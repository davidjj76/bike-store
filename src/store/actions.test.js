import * as actions from './actions';
import * as TYPES from './types';

describe('actions', () => {
  describe('addToCartSuccess', () => {
    test('should create one ADD_TO_CART_SUCCESS action with bikeId and quantity', () => {
      const bikeId = '5';
      const quantity = 8;
      const expectedAction = {
        type: TYPES.ADD_TO_CART_SUCCESS,
        bikeId,
        quantity,
      };
      expect(actions.addToCartSuccess(bikeId, quantity)).toEqual(
        expectedAction
      );
    });

    test('should create one ADD_TO_CART_SUCCESS action with bikeId and quantity 1', () => {
      const bikeId = '5';
      const expectedAction = {
        type: TYPES.ADD_TO_CART_SUCCESS,
        bikeId,
        quantity: 1,
      };
      expect(actions.addToCartSuccess(bikeId)).toEqual(expectedAction);
    });
  });
});
