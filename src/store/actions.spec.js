import * as Types from './types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addToCartSuccess, fetchBikes } from './actions';
import BikesService from '../services/Bikes';
jest.mock('../services/Bikes');

const middlewares = [thunk.withExtraArgument({ services: { BikesService } })];
const mockStore = configureStore(middlewares);
const store = mockStore({});

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
    const bikes = [1, 2, 3];
    const error = 'Error fetching bikes';
    BikesService.getAllBikes
      .mockResolvedValueOnce(bikes)
      .mockRejectedValueOnce(error);

    beforeEach(() => {
      store.clearActions();
    });

    describe('when getAllBikes resolves', () => {
      it('should dispatch a FETCH_BIKES_REQUEST and a FETCH_BIKES_SUCCESS actions', async () => {
        const expectedActions = [
          {
            type: Types.FETCH_BIKES_REQUEST,
          },
          {
            type: Types.FETCH_BIKES_SUCCESS,
            bikes,
          },
        ];
        await store.dispatch(fetchBikes());
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('when getAllBikes rejects', () => {
      it('should dispatch a FETCH_BIKES_REQUEST and a FETCH_BIKES_FAILURE actions', async () => {
        const expectedActions = [
          {
            type: Types.FETCH_BIKES_REQUEST,
          },
          {
            type: Types.FETCH_BIKES_FAILURE,
            error,
          },
        ];
        await store.dispatch(fetchBikes());
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    //     const dispatch = jest.fn();

    //     beforeEach(() => {
    //       dispatch.mockClear();
    //     });

    //     const bikes = [1, 2, 3];
    //     const error = 'Error fetching bikes';
    //     BikesService.getAllBikes
    //       .mockResolvedValueOnce(bikes)
    //       .mockRejectedValueOnce(error);

    //     describe('when getAllBikes resolves', () => {
    //       it('should dispatch a FETCH_BIKES_REQUEST and a FETCH_BIKES_SUCCESS actions', async () => {
    //         await fetchBikes()(dispatch, undefined, { services: { BikesService } });
    //         expect(dispatch).toHaveBeenNthCalledWith(1, {
    //           type: Types.FETCH_BIKES_REQUEST,
    //         });

    //         expect(BikesService.getAllBikes).toHaveBeenCalled();

    //         expect(dispatch).toHaveBeenNthCalledWith(2, {
    //           type: Types.FETCH_BIKES_SUCCESS,
    //           bikes,
    //         });
    //       });
    //     });

    //     describe('when getAllBikes rejectes', () => {
    //       it('should dispatch a FETCH_BIKES_REQUEST and a FETCH_BIKES_FAILURE actions', async () => {
    //         await fetchBikes()(dispatch, undefined, { services: { BikesService } });

    //         expect(dispatch).toHaveBeenNthCalledWith(1, {
    //           type: Types.FETCH_BIKES_REQUEST,
    //         });

    //         expect(dispatch).toHaveBeenNthCalledWith(2, {
    //           type: Types.FETCH_BIKES_FAILURE,
    //           error,
    //         });
    //       });
    //     });
  });
});
