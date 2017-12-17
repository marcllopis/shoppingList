import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MyShopping from './components/MyShopping'
import reducer from './reducers'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <MyShopping />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
