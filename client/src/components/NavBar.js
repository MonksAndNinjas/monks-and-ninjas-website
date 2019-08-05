import React from 'react';
// import allows use of NavLink component
import { NavLink } from 'react-router-dom';
// allows use of logo for menu button
import logo from '../images/monks_and_ninjas_logo.svg'
// styling
import '../css/navBar.css';

import particles from'../helpers/particles';
// handles data used for NavBar in all pages
class NavBar extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <img src={logo} className="dropbtn" style={{ width: '5%', height: '5%' }} alt={logo} />
          <div className="dropdown-content">
            <NavLink to="/" exact activeStyle={{ background: 'grey' }}>Home</NavLink>
            <NavLink to="/blog" exact activeStyle={{ background: 'grey' }}>Blog</NavLink>
            <NavLink to="/portfolio" exact activeStyle={{ background: 'grey' }}>Portfolio</NavLink>
            <NavLink to="/art" exact activeStyle={{ background: 'grey' }}>Art</NavLink>
            <NavLink to="/resume" exact activeStyle={{ background: 'grey' }}>Resume</NavLink>
          </div>
      </div>
    );
  }
}

export default NavBar;
