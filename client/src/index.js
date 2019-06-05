import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import { BrowserRouter as Router, Route }from 'react-router-dom'

import blogReducer from './reducers/blogReducer';

import Home from './Home';

import NavBar from './components/NavBar';

import * as serviceWorker from './serviceWorker';

const store = createStore(blogReducer, applyMiddleware(thunk));

const Header = () =>
  <header><NavBar /></header>;

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <React.Fragment>
      <Header />
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
