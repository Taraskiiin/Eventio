import React from 'react'
import { NavLink } from 'react-router-dom'

import { HomeIcon, SearchIcon, TicketsIcon, UserIcon } from '../../../assets/icons/icons'

import './navbar-mobile.scss'

const NavbarMobile: React.FC = () => (
  <footer>
    <nav className='navbar-mobile'>
      <ul>
        <li>
          <NavLink to='/'>
            <HomeIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to='/search'>
            <SearchIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to='/tickets'>
            <TicketsIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to='/user'>
            <UserIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  </footer>
)

export default NavbarMobile
