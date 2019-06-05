import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route }from 'react-router-dom'

import Home from './Home';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <App />
      </React.Fragment>
    </Router>
  </Provider>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
