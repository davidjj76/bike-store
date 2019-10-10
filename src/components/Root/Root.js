import React from 'react';
import T from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Root({ store, children }) {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
}

Root.propTypes = {
  store: T.shape({
    dispatch: T.func.isRequired,
    getState: T.func.isRequired,
    subscribe: T.func.isRequired,
  }).isRequired,
};
