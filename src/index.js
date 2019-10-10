import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import App from './components/App';
import './index.css';

import { configureStore } from './store';
const store = configureStore();

ReactDOM.render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('root'),
);
