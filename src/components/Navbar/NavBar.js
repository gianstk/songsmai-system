import React from 'react';
import { Link } from 'react-router-dom';

// import CSS
import './NavBar.css';
import './../Utilities.css';

const NavBar = () => {
  return(
    <nav>
      <div className="navbar">
        <div className="container flex">
          <Link className="router-link" id="logo" to="/">Song Smai</Link>

          <ul>
            <li><Link className="router-link" to="/calculator">Size Calculator</Link></li>
            <li><Link className="router-link" to="/">etc..</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;