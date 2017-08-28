import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import styles from './styles/styles.css';
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';

const store = createStore(reducer);

ReactDOM.render(
  <App />,
  document.getElementById('react-app-root')
);
