import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Cart from '../Cart';
import BikesStore from '../BikesStore';

import { BIKE_FILTERS } from '../../constants';
import BikesService from '../../services/Bikes';
import {
  setBikes,
  setBikesFilter,
  addToCart,
  removeFromCart,
  checkoutCart,
} from '../../store/actions';

import './styles.css';
class App extends Component {
  state = this.props.store.getState();

  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    this.loadBikes();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  loadBikes = () => {
    const { dispatch } = this.props.store;
    const bikes = BikesService.getAllBikes();
    dispatch(setBikes(bikes));
  };

  setBikesFilter = filter => {
    const { dispatch } = this.props.store;
    dispatch(setBikesFilter(filter));
  };

  getVisibleBikes = () => {
    const { bikes, bikesFilter } = this.state;
    let visibleBikes = bikes;
    if (bikesFilter !== BIKE_FILTERS.ALL) {
      visibleBikes = bikes.filter(bike => bike.type === bikesFilter);
    }
    return visibleBikes.map(bike => ({ ...bike, hasStock: bike.stock > 0 }));
  };

  addToCart = bikeId => {
    const { dispatch } = this.props.store;
    dispatch(addToCart(bikeId));
  };

  getTotalCartItems = () => {
    const { cart } = this.state;
    return Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);
  };

  getCartItems = () => {
    const { cart, bikes } = this.state;
    return Object.entries(cart).map(entry => {
      const [bikeId, quantity] = entry;
      const bike = bikes.find(bike => bike.id === bikeId);
      return { ...bike, quantity, totalPrice: bike.price * quantity };
    });
  };

  removeFromCart = (itemId, quantity) => {
    const { dispatch } = this.props.store;
    dispatch(removeFromCart(itemId, quantity));
  };

  checkoutCart = () => {
    const { dispatch } = this.props.store;
    dispatch(checkoutCart());
  };

  render() {
    const { bikesFilter } = this.state;
    return (
      <div className="app">
        <Header
          className="app-header"
          totalCartItems={this.getTotalCartItems()}
        />
        <main className="app-main">
          <Switch>
            <Route
              exact
              path="/cart"
              render={props => (
                <Cart
                  {...props}
                  items={this.getCartItems()}
                  removeFromCart={this.removeFromCart}
                  checkoutCart={this.checkoutCart}
                />
              )}
            />
            <Route
              path="/"
              render={props => (
                <BikesStore
                  {...props}
                  className="app-store"
                  filtersClassName="app-store-filters"
                  listClassName="app-store-list"
                  bikes={this.getVisibleBikes()}
                  bikesFilter={bikesFilter}
                  setBikesFilter={this.setBikesFilter}
                  addToCart={this.addToCart}
                />
              )}
            ></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
