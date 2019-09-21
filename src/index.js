import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';

import { configureStore } from './store';
const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
