import React from 'react'
import { NavLink } from 'react-router-dom'

import { HomeIcon, SearchIcon, TicketsIcon, UserIcon } from '../icons/icons'

import './navbar.scss'

const Header = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">
            <HomeIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            <SearchIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to="/tickets">
            <TicketsIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to="/user">
            <UserIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
