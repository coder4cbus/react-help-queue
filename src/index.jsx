import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('react-app-root')
);
