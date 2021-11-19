import React from 'react'

import { MusicType } from '../../enums'
import ShortInfoCard from '../ShortInfoCard/ShortInfoCard'

const Calendar: React.FC = () => (
  <div className='date-wrapper'>
    <div className='date'>
      <span>12</span>
    </div>
    <ShortInfoCard
      name='Electronica Next Month'
      genre={MusicType.Electronic}
      link=''
      src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    />
  </div>
)

export default Calendar
