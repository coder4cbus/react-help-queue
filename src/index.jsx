import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import styles from './styles/styles.css';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const store = createStore(reducer, [], applyMiddleware(middlewareLogger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('react-app-root')
);
