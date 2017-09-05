import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import styles from './styles/styles.css';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';
import persistDataLocally from './middleware/persist-local-storage-data';

const store = createStore(reducer, applyMiddleware(middlewareLogger, persistDataLocally));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app-root')
);
