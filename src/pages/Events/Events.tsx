import React, { useState } from 'react'

import RoundButton from '../../components/RoundButton/RoundButton'
import EventForm from './EventForm'
import styles from './events.module.scss'

const Events: React.FC = () => {
  const [open, openPopUp] = useState<boolean>(false)

  console.log(open)

  return (
    <div className={styles['events']}>
      <h1>Events</h1>
      <RoundButton placeholder='+' onClick={() => openPopUp(true)} />
      <EventForm open={open} />
    </div>
  )
}

export default Events
