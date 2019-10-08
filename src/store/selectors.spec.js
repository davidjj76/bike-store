import { BIKE_FILTERS, BIKE_TYPES } from '../constants';
import * as selectors from './selectors';

describe('getVisibleBikes', () => {
  const bikes = [
    { type: BIKE_TYPES.MOUNTAIN, stock: 1 },
    { type: BIKE_TYPES.ROAD, stock: 0 },
  ];

  it('should return all bikes', () => {
    const filteredBikes = selectors.getVisibleBikes(bikes, BIKE_FILTERS.ALL);
    expect(filteredBikes).toHaveLength(2);
    expect(filteredBikes[0].hasStock).toBe(true);
    expect(filteredBikes[1].hasStock).toBe(false);
  });

  it('should return filtered by type bikes', () => {
    const filteredBikes = selectors.getVisibleBikes(
      bikes,
      BIKE_FILTERS.MOUNTAIN,
    );
    expect(filteredBikes).toHaveLength(1);
    expect(filteredBikes[0].hasStock).toBe(true);
  });
});
