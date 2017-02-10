import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
// Import the store from redux. This brings together the actions and reducers.
import { createStore } from 'redux';
// Import the reducer and give it to the store
import reducers from './reducers/index.js';
const theStore = createStore(reducers);

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
