import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

import { Home, Search, Tickets, User } from '../pages';

export const pagesNamings = {
  '/': 'Home',
  '/search': 'Search',
  '/tickets': 'Tickets',
  '/user': 'User',
};

const Router = () => (
  <HashRouter>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/tickets" component={Tickets} />
    <Route path="/user" component={User} />
  </HashRouter>
);

export default Router;
