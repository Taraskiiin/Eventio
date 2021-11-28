import React from 'react'

import { SettingsIcon } from '../../assets/icons/icons'
import Calendar from '../../components/Calendar/Calendar'
import Collections from '../../components/Collections/Collections'
import { DetailedCardComponent } from '../../components/DetailedCardComponent/DetailedCardComponent'
import { MusicType } from '../../enums'
import styles from './home.module.scss'

const Home: React.FC = () => (
  <section className={styles['filters__block']}>
    <div className={styles['container']}>
      <div className={styles['title-block']}>
        <h2>For you</h2>
        <button className={styles['settings-btn']}>
          <SettingsIcon />
        </button>
      </div>
      <DetailedCardComponent
        data='FRIDAY AUG 24, 9PM'
        name='Brightlight Music Festival'
        genre={MusicType.Psytrance}
        src='https://image.freepik.com/free-photo/people-concert-with-smoke-overlay-texture_53876-126856.jpg'
        price='150 - 230'
      />
      <Collections />
      <Calendar />
    </div>
  </section>
)

export default Home
