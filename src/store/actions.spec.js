import * as actions from './actions';
import * as types from './types';
import BikesService from '../services/Bikes';

jest.mock('../services/Bikes');

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
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  describe('when getAllBikes resolves', () => {
    const bikes = [1, 2, 3];
    BikesService.getAllBikes.mockResolvedValueOnce(bikes);

    it('should dispatch a FETCH_BIKES_REQUEST and a FETCH_BIKES_SUCCESS actions', async () => {
      await actions.fetchBikes()(dispatch);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: types.FETCH_BIKES_REQUEST,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: types.FETCH_BIKES_SUCCESS,
        bikes,
      });
    });
  });

  describe('when getAllBikes rejectes', () => {
    const error = 'Error fetching bikes';
    BikesService.getAllBikes.mockRejectedValue(error);

    it('should dispatch a FETCH_BIKES_REQUEST and a FETCH_BIKES_FAILURE actions', async () => {
      await actions.fetchBikes()(dispatch);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: types.FETCH_BIKES_REQUEST,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: types.FETCH_BIKES_FAILURE,
        error,
      });
    });
  });
});
