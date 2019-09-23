import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Cart from '../Cart';
import BikesStore from '../BikesStore';

import { BIKE_FILTERS } from '../../constants';
import BikesService from '../../services/Bikes';
import { setBikes, setBikesFilter, addToCart } from '../../store/actions';

import './styles.css';
class App extends Component {
  state = this.props.store.getState();

  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    store.dispatch(setBikes(BikesService.getAllBikes()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getVisibleBikes = () => {
    const { bikes, bikesFilter } = this.state;
    const visibleBikes =
      bikesFilter === BIKE_FILTERS.ALL
        ? bikes
        : bikes.filter(bike => bike.type === bikesFilter);
    return visibleBikes.map(bike => ({ ...bike, hasStock: bike.stock > 0 }));
  };

  render() {
    const { bikesFilter, cart } = this.state;
    const { dispatch } = this.props.store;
    return (
      <div className="app">
        <Header
          className="app-header"
          cartItems={Object.values(cart).reduce((acc, v) => acc + v, 0)}
        />
        <main className="app-main">
          <Switch>
            <Route exact path="/cart" component={Cart}></Route>
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
                  setBikesFilter={filter => dispatch(setBikesFilter(filter))}
                  addToCart={bikeId => dispatch(addToCart(bikeId))}
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
