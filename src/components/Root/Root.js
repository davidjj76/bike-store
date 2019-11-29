import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from '../App';

export default function Root({ store, history, ...props }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App {...props} />
      </ConnectedRouter>
    </Provider>
  );
}
