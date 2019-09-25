import { BIKE_FILTERS } from '../constants';

export function getVisibleBikes(bikes, bikesFilter) {
  let visibleBikes = bikes;
  if (bikesFilter !== BIKE_FILTERS.ALL) {
    visibleBikes = bikes.filter(bike => bike.type === bikesFilter);
  }
  return visibleBikes.map(bike => ({ ...bike, hasStock: bike.stock > 0 }));
}

export function getTotalCartItems(cart) {
  return Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);
}

export function getCartItems(cart, bikes) {
  return Object.entries(cart).map(entry => {
    const [bikeId, quantity] = entry;
    const bike = bikes.find(bike => bike.id === bikeId);
    return { ...bike, quantity, totalPrice: bike.price * quantity };
  });
}
