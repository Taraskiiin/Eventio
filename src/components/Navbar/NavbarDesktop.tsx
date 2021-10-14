import React from 'react';

import { NavLink } from 'react-router-dom';
import { LogoIcon } from '../icons/icons';

import './navbar-desktop.scss';

const NavbarDesktop = () => {
  return (
    <div className="navbar-desktop_block">
      <div className="navbar-desktop_flex">
        <a className="logo" href="#">
          <span className="e">E</span>
          <LogoIcon />
          <span className="v">v</span>
          <span className="entio">entio</span>
        </a>
        <nav className="navbar-desktop">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink to="/tickets">Tickets</NavLink>
            </li>
            <li>
              <NavLink to="/user">User</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarDesktop;
