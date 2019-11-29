import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import BikesService from './services/Bikes';
import Root from './components/Root';
import './index.css';

import { configureStore } from './store';

const history = createBrowserHistory();
const store = configureStore({ history, services: { BikesService } })();

const rootProps = {
  history,
  store,
};

ReactDOM.render(<Root {...rootProps} />, document.getElementById('root'));
