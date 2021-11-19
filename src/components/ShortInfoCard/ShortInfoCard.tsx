import React from 'react'

import { LinkArrowIcon, NoteIcon } from '../../assets/icons/icons'

import './short-info-card.scss'

type ShortInfoCardType = {
  name: string
  genre: string
  link: string
  src: string
}

const ShortInfoCard: React.FC<ShortInfoCardType> = ({ name, genre, link, src }) => (
  <div style={{ backgroundImage: `url(${src})` }} className='short-info-card'>
    <div className='overlay' />
    <p className='name'>{name}</p>
    <p className='genre'>
      <NoteIcon />
      <span className='genre-label'>{genre}</span>
    </p>
    <a href={link} className='link'>
      Learn more <LinkArrowIcon />
    </a>
  </div>
)

export default ShortInfoCard
