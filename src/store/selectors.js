import { BIKE_FILTERS } from '../constants';

export const getBikes = state => state.bikes;
export const getFilter = state => state.filter;
export const isActiveFilter = (state, filter) => state.filter === filter;

export function getVisibleBikes(state) {
  const bikes = getBikes(state);
  const filter = getFilter(state);
  let visibleBikes = bikes;
  if (filter !== BIKE_FILTERS.ALL) {
    visibleBikes = bikes.filter(bike => bike.type === filter);
  }
  return visibleBikes.map(bike => ({ ...bike, hasStock: bike.stock > 0 }));
}
