import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Cart from '../Cart';
import BikesStore from '../BikesStore';

import BikesService from '../../services/Bikes';

import './styles.css';

class App extends Component {
  componentDidMount() {
    this.loadBikes();
  }

  loadBikes = () => {
    const bikes = BikesService.getAllBikes();
    this.props.loadBikes(bikes);
  };

  render() {
    return (
      <div className="app">
        <Header className="app-header" />
        <main className="app-main">
          <Switch>
            <Route exact path="/cart" component={Cart} />
            <Route
              path="/"
              render={() => (
                <BikesStore
                  className="app-store"
                  filtersClassName="app-store-filters"
                  listClassName="app-store-list"
                />
              )}
            ></Route>
          </Switch>
        </main>
        {/* <Loading className="app-loading" /> */}
      </div>
    );
  }
}

export default App;
