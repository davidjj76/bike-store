import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';
import * as TYPES from './types';

import BikesService from '../services/Bikes';

jest.mock('../services/Bikes');

const history = {
  push: jest.fn(),
};

const middlewares = [thunk.withExtraArgument({ BikesService, history })];
const mockStore = configureStore(middlewares);
const store = mockStore({});

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

  describe('fetchBikes', () => {
    test('should dispatch FETCH_BIKES_REQUEST and FETCH_BIKES_SUCCESS actions', async () => {
      const dispatch = jest.fn();
      const action = actions.fetchBikes();
      const getState = () => {};
      const bikes = [];
      BikesService.getAllBikes.mockResolvedValue(bikes);

      await action(dispatch, getState);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: TYPES.FETCH_BIKES_REQUEST,
      });

      expect(BikesService.getAllBikes).toHaveBeenCalled();

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: TYPES.FETCH_BIKES_SUCCESS,
        bikes,
      });
    });

    test('should dispatch FETCH_BIKES_REQUEST and FETCH_BIKES_FAILURE actions', async () => {
      const action = actions.fetchBikes();
      const dispatch = jest.fn();
      const getState = () => {};
      const error = 'error';
      BikesService.getAllBikes.mockRejectedValue(error);

      await action(dispatch, getState);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: TYPES.FETCH_BIKES_REQUEST,
      });

      expect(BikesService.getAllBikes).toHaveBeenCalled();

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: TYPES.FETCH_BIKES_FAILURE,
        error,
      });
    });
  });

  describe('checkoutCartAndNavigate', () => {
    beforeEach(async () => {
      await store.dispatch(actions.checkoutCartAndNavigate());
    });

    test('should dispatch actions', () => {
      const expectedActions = [
        { type: TYPES.CHECKOUT_CART_REQUEST },
        { type: TYPES.CHECKOUT_CART_SUCCESS },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('should redirect to home', () => {
      expect(history.push).toHaveBeenCalledWith('/');
    });
  });
});
