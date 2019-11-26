import { BIKE_FILTERS } from '../constants';

export function getVisibleBikes(bikes, filter) {
  let visibleBikes = bikes;
  if (filter !== BIKE_FILTERS.ALL) {
    visibleBikes = bikes.filter(bike => bike.type === filter);
  }
  return visibleBikes.map(bike => ({ ...bike, hasStock: bike.stock > 0 }));
}

export function isCurrentFilter(currentFilter, filter) {
  return currentFilter === filter;
}
