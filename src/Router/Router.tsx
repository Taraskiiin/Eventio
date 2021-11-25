import React from 'react'
import { Route, HashRouter, Navigate, Routes } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import { Home, Search, Tickets, User } from '../pages'

export const pagesNamings = {
  '/': 'Home',
  '/search': 'Search',
  '/tickets': 'Tickets',
  '/user': 'User',
}

const Router: React.FC = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path='*' element={<Navigate to='/' />} />
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/tickets' element={<Tickets />} />
      <Route path='/user' element={<User />} />
    </Routes>
  </HashRouter>
)

export default Router
