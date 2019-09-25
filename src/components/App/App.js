import React, { Component } from 'react';
import T from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Cart from '../Cart';
import BikesStore from '../BikesStore';
// import Loading from '../Loading';

import './styles.css';
class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
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
        {/* <Loading className="app-loading" /> */}
      </div>
    );
  }
}

App.propTypes = {
  onLoad: T.func.isRequired,
};

export default App;
