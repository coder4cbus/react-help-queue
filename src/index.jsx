import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import styles from './styles/styles.css';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { reduxFirebase } from 'react-redux-firebase';
import firebaseCredentials from './constants/apiKeys.js';
import combinedReducer from './reducers/index';

const createStoreWithFirebaseMiddleware = compose(
  reduxFirebase(firebaseCredentials)
)(createStore);

const store = createStoreWithFirebaseMiddleware(
  combinedReducer,
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('react-app-root')
);
