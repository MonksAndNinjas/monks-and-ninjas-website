import React from 'react';
import ReactDOM from 'react-dom';
// imports for creating and handling store
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
// import for creating Routes
import { BrowserRouter as Router, Route }from 'react-router-dom'
// imports for reducers
import { combineReducers } from 'redux';
import gitReducer from './reducers/gitReducer';
import blogReducer from './reducers/blogReducer';
import projectReducer from './reducers/projectReducer';
// styling
import './index.css';
// imports pages for rendering routes
import Home from './Home';
import BlogContainer from './containers/BlogContainer';
import PortfolioContainer from './containers/PortfolioContainer';
import App from './App';
// imports nav bar for all routes
import NavBar from './components/NavBar';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  posts: blogReducer,
  gitPosts: gitReducer,
  projects: projectReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

const Header = () =>
  <header><NavBar /></header>;

const Footer = () =>
  <footer></footer>;

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <React.Fragment>
      <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={BlogContainer} />
        <Route exact path="/portfolio" component={PortfolioContainer} />
        <Footer />
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
