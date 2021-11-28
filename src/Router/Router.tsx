import React from 'react'
import { Route, HashRouter, Navigate, Routes } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import { Events, Home, Search, Tickets, User } from '../pages'

export const pagesNamings = {
  '/': 'Home',
  '/search': 'Search',
  '/tickets': 'Tickets',
  '/user': 'User',
  '/events': 'Events',
}

const Router: React.FC = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path='*' element={<Navigate to='/' />} />
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/events' element={<Events />} />
      <Route path='/tickets' element={<Tickets />} />
      <Route path='/user' element={<User />} />
    </Routes>
  </HashRouter>
)

export default Router
