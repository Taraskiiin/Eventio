import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

import Header from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Tickets from './components/Tickets/Tickets'
import User from './components/User/User'

import './styles/reset.scss'
import './styles/styles.scss'

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/user" component={User} />
      </HashRouter>
    </>
  )
}

export default App
