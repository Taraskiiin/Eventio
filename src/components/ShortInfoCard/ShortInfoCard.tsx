import React from 'react'

import { LinkArrowIcon, NoteIcon } from '../../assets/icons/icons'
import styles from './short-info-card.module.scss'

type ShortInfoCardType = {
  name: string
  genre: string
  link: string
  src: string
}

const ShortInfoCard: React.FC<ShortInfoCardType> = ({ name, genre, link, src }) => (
  <div style={{ backgroundImage: `url(${src})` }} className={styles['short-info-card']}>
    <div className={styles['overlay']} />
    <p className={styles['name']}>{name}</p>
    <p className={styles['genre']}>
      <NoteIcon />
      <span className={styles['genre-label']}>{genre}</span>
    </p>
    <a href={link} className={styles['link']}>
      Learn more <LinkArrowIcon />
    </a>
  </div>
)

export default ShortInfoCard
