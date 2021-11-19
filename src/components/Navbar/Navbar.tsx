import React from 'react'

import MobileHeader from '../MobileHeader/MobileHeader'
import NavbarDesktop from './NavbarDesktop/NavbarDesktop'
import NavbarMobile from './NavbarMobile/NavbarMobile'

const Navbar: React.FC = () => (
  <>
    <MobileHeader />
    <NavbarDesktop />
    <NavbarMobile />
  </>
)

export default Navbar
