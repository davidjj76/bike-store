import { BIKE_TYPES } from '../constants';

const bikes = [
  { id: 1, type: BIKE_TYPES.MOUNTAIN, stock: 10 },
  { id: 2, type: BIKE_TYPES.ROAD, stock: 8 },
];

export default {
  getAllBikes: () => bikes,
};
