import React from 'react'
import { useLocation } from 'react-router'

import { pagesNamings } from '../../Router/Router'
import styles from './mobile-header.module.scss'

const MobileHeader: React.FC = () => {
  const location = useLocation()

  const activePage = Object.entries(pagesNamings).find((entry) => entry[0] === location.pathname) || ''

  return <header className={styles['mobile-header']}>{activePage[1]}</header>
}

export default MobileHeader
