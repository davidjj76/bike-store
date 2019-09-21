import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Cart from '../Cart';
import BikesStore from '../BikesStore';

import './styles.css';
class App extends Component {
  state = this.props.store.getState();

  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="app">
        <Header className="app-header" />
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
