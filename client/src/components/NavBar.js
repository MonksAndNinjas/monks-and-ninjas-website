import React from 'react';
// import allows use of NavLink component
import { NavLink } from 'react-router-dom';
// allows use of logo for menu button
import logo from './monks_and_ninjas_logo.svg'
// styling
import './NavBar.css';
// handles data used for NavBar in all pages
class NavBar extends React.Component {
  render() {
    return (
      <div className="dropdown">

        <img src={logo} className="dropbtn" style={{ width: '5%', height: '5%' }} alt={logo} />
          <div className="dropdown-content">
            <NavLink to="/" exact activeStyle={{ background: 'grey' }}>Home</NavLink>
            <NavLink to="/blog" exact activeStyle={{ background: 'grey' }}>Blog</NavLink>
          </div>
      </div>
    );
  }
}

export default NavBar;
