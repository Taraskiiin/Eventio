import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import { Home, Search, Tickets, User } from '../pages';

import NavbarMobile from '../components/Navbar/NavbarMobile/NavbarMobile';
import NavbarDesktop from '../components/Navbar/NavbarDesktop/NavbarDesktop';

const Router = () => (
  <HashRouter>
    <NavbarDesktop />
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/tickets" component={Tickets} />
    <Route path="/user" component={User} />
    <NavbarMobile />
  </HashRouter>
);

export default Router;
