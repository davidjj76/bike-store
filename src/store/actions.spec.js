import * as Types from './types';
import { addToCartSuccess, fetchBikes } from './actions';
import BikesService from '../services/Bikes';
jest.mock('../services/Bikes');

describe('actions', () => {
  describe('addToCartSuccess', () => {
    it('should create a ADD_TO_CART action', () => {
      const bikeId = 'bikeId';
      const quantity = 5;
      const expectedAction = {
        type: Types.ADD_TO_CART_SUCCESS,
        bikeId,
        quantity,
      };
      expect(addToCartSuccess(bikeId, quantity)).toEqual(expectedAction);
    });
  });

  describe('fetchBikes', () => {
    const dispatch = jest.fn();

    beforeEach(() => {
      dispatch.mockClear();
    });

    const bikes = [1, 2, 3];
    const error = 'Error fetching bikes';
    BikesService.getAllBikes
      .mockResolvedValueOnce(bikes)
      .mockRejectedValueOnce(error);

    describe('when getAllBikes resolves', () => {
      it('should dispatch a FETCH_BIKES_REQUEST and a FETCH_BIKES_SUCCESS actions', async () => {
        await fetchBikes()(dispatch, undefined, { services: { BikesService } });
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Types.FETCH_BIKES_REQUEST,
        });

        expect(BikesService.getAllBikes).toHaveBeenCalled();

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: Types.FETCH_BIKES_SUCCESS,
          bikes,
        });
      });
    });

    describe('when getAllBikes rejectes', () => {
      it('should dispatch a FETCH_BIKES_REQUEST and a FETCH_BIKES_FAILURE actions', async () => {
        await fetchBikes()(dispatch, undefined, { services: { BikesService } });

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Types.FETCH_BIKES_REQUEST,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: Types.FETCH_BIKES_FAILURE,
          error,
        });
      });
    });
  });
});
