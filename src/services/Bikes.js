import { BIKE_TYPES } from '../constants';

const bikes = [
  {
    id: 1,
    image: 'full_exceed-cf-sl-7_c1189.png',
    name: 'Exceed CF SL 7.0',
    price: 3500,
    stock: 10,
    type: BIKE_TYPES.MOUNTAIN,
  },
  {
    id: 2,
    image: 'full_exceed-cf-sl-7_c1189.png',
    name: 'Exceed CF SL 7.0',
    price: 3500,
    stock: 10,
    type: BIKE_TYPES.MOUNTAIN,
  },
  {
    id: 3,
    name: 'Ultimate CF SL 8.0',
    type: BIKE_TYPES.ROAD,
    price: 3500,
    stock: 8,
    image: 'full_ultimate-cf-sl-8_c1294.png',
  },
  {
    id: 4,
    name: 'Ultimate CF SL 8.0',
    type: BIKE_TYPES.ROAD,
    price: 3500,
    stock: 0,
    image: 'full_ultimate-cf-sl-8_c1294.png',
  },
];

export default {
  getAllBikes: () => bikes,
};
