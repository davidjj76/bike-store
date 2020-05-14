import { BIKE_FILTERS } from '../constants';

export const getBikes = state => state.bikes;
export const getCart = state => state.cart;
export const isActiveFilter = (state, filter) => state.filter === filter;

export function getVisibleBikes(state, filter) {
  const bikes = getBikes(state);
  let visibleBikes = bikes;
  if (filter !== BIKE_FILTERS.ALL) {
    visibleBikes = bikes.filter(bike => bike.type === filter);
  }
  return visibleBikes.map(bike => ({ ...bike, hasStock: bike.stock > 0 }));
}

export function getTotalCartItems(state) {
  const cart = getCart(state);
  return Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);
}

export function getCartItems(state) {
  const bikes = getBikes(state);
  const cart = getCart(state);
  return Object.entries(cart).map(entry => {
    const [bikeId, quantity] = entry;
    const bike = bikes.find(bike => bike.id === bikeId);
    return { ...bike, quantity, totalPrice: bike.price * quantity };
  });
}

export function getBikeQuantityInCart(state, bikeId) {
  const cart = getCart(state);
  return cart[bikeId] || 0;
}

export const getUi = state => state.ui;
