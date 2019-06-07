import React from 'react';
// import allows use of NavLink component
import { NavLink } from 'react-router-dom';
// handles data used for NavBar in all pages
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact activeStyle={{ background: 'grey' }}>Home</NavLink>
        <NavLink to="/blog" exact activeStyle={{ background: 'grey' }}>Blog</NavLink>
      </div>
    );
  }
}

export default NavBar;
