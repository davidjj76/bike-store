import React, { Component } from 'react';

import {
  setBikes,
  setBikesFilter,
  addToCart,
  removeFromCart,
  checkoutCart,
} from '../../store/actions';
import { BIKE_FILTERS } from '../../constants';
import { BikesService } from '../../services';

const actions = [
  setBikes(BikesService.getAllBikes()),
  setBikesFilter(BIKE_FILTERS.MOUNTAIN),
  addToCart(1),
  addToCart(2),
  removeFromCart(1),
  setBikesFilter(BIKE_FILTERS.ROAD),
  checkoutCart(),
];

class App extends Component {
  state = { ...this.props.store.getState(), nextAction: 0 };

  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  dispatchNextAction = () => {
    const { store } = this.props;
    const { nextAction } = this.state;
    store.dispatch(actions[nextAction]);
    this.setState({ nextAction: nextAction + 1 });
  };

  render() {
    const { nextAction, ...state } = this.state;
    return (
      <div className="app">
        <button
          disabled={nextAction === actions.length}
          onClick={this.dispatchNextAction}
        >
          Dispatch next action
        </button>
        <div>{`last action: ${
          nextAction === 0 ? 'none' : JSON.stringify(actions[nextAction - 1])
        }`}</div>
        <div>{`state: ${JSON.stringify(state)}`}</div>
      </div>
    );
  }
}

export default App;
