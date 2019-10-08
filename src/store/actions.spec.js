import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';
import * as types from './types';
import BikesService from '../services/Bikes';

jest.mock('../services/Bikes');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('removeFromCart', () => {
  it('should create a REMOVE_FROM_CART action', () => {
    const itemId = '1';
    const quantity = 5;
    const action = actions.removeFromCart(itemId, quantity);
    expect(action).toEqual({
      type: types.REMOVE_FROM_CART,
      itemId,
      quantity,
    });
  });
});

describe('fetchBikes', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('when getAllBikes resolves', () => {
    const bikes = [1, 2, 3];
    BikesService.getAllBikes.mockResolvedValueOnce(bikes);

    it('should dispatch a FETCH_BIKES_REQUEST and a FETCH_BIKES_SUCCESS actions', async () => {
      await store.dispatch(actions.fetchBikes());

      expect(store.getActions()[0]).toEqual({
        type: types.FETCH_BIKES_REQUEST,
      });

      expect(store.getActions()[1]).toEqual({
        type: types.FETCH_BIKES_SUCCESS,
        bikes,
      });
    });
  });

  describe('when getAllBikes rejectes', () => {
    const error = 'Error fetching bikes';
    BikesService.getAllBikes.mockRejectedValue(error);

    it('should dispatch a FETCH_BIKES_REQUEST and a FETCH_BIKES_FAILURE actions', async () => {
      await store.dispatch(actions.fetchBikes());

      expect(store.getActions()[0]).toEqual({
        type: types.FETCH_BIKES_REQUEST,
      });

      expect(store.getActions()[1]).toEqual({
        type: types.FETCH_BIKES_FAILURE,
        error,
      });
    });
  });
});
