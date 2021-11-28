import React from 'react'

import { TicketsIcon, NoteIcon, CloseIcon, UahIcon } from '../../assets/icons/icons'
import styles from './detailed-card-component.module.scss'

interface DetailedCardComponentProps {
  data: string
  name: string
  genre: string
  src: string
  price: string
}

export const DetailedCardComponent: React.FC<DetailedCardComponentProps> = ({ data, name, genre, src, price }) => (
  <div className={styles['detailed-card-component-wrapper']}>
    <div className={styles['detailed-card-component']} style={{ backgroundImage: `url(${src})` }}>
      <div className={styles['overlay']}>
        <button className={styles['close-btn']}>
          <CloseIcon />
        </button>
        <div className={styles['info-block']}>
          <p className={styles['data']}>{data}</p>
          <p className={styles['name']}>{name}</p>
          <div className={styles['bottom-block']}>
            <NoteIcon />
            <p className={styles['genre']}>{genre}</p>
            <TicketsIcon />
            <p className={styles['price']}>
              <UahIcon />
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
