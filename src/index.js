import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import './index.css';
import BikesService from './services/Bikes';

import { configureStore } from './store';

const store = configureStore({ BikesService })();
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
