import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDom.render( <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root'));

export default store;
