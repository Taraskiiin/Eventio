import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import NavbarMobile from './components/Navbar/NavbarMobile';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Tickets from './components/Tickets/Tickets';
import User from './components/User/User';

import './styles/reset.scss';
import './styles/styles.scss';
import NavbarDesktop from './components/Navbar/NavbarDesktop';

function App() {
  return (
    <>
      <HashRouter>
        <NavbarDesktop />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/user" component={User} />
        <NavbarMobile />
      </HashRouter>
    </>
  );
}

export default App;
