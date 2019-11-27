import React, { Component } from 'react';
import T from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Cart from '../Cart';
import BikesStore from '../BikesStore';
import Loading from '../Loading';
import Error from '../Error';
import BikesService from '../../services/Bikes';

import './styles.css';
class App extends Component {
  componentDidMount() {
    this.loadBikes();
  }

  loadBikes = async () => {
    const bikes = await BikesService.getAllBikes();
    this.props.loadBikes(bikes);
  };

  render() {
    const { isFetching, error } = this.props;
    return (
      <div className="app">
        <Header className="app-header" />
        <main className="app-main">
          <Switch>
            <Route exact path="/cart" component={Cart} />
            <Route
              path="/"
              render={props => (
                <BikesStore
                  {...props}
                  className="app-store"
                  filtersClassName="app-store-filters"
                  listClassName="app-store-list"
                />
              )}
            ></Route>
          </Switch>
        </main>
        {isFetching && <Loading className="app-loading" />}
        {error && <Error className="app-error" error={error} />}
      </div>
    );
  }
}

App.propTypes = {
  isFetching: T.bool,
  error: T.object,
  loadBikes: T.func.isRequired,
};

export default App;
