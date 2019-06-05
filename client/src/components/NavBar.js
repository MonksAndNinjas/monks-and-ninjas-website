import React from 'react';
import { NavLink } from 'react-router-dom';

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
