import React from 'react'
import Slider from 'react-slick'

import ShortInfoCard from '../../components/ShortInfoCard/ShortInfoCard'
import { MusicType } from '../../enums'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './collections.module.scss'

const Collections: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    initialSlide: 0,
  }

  return (
    <section className={styles['wrapper-collections-slick-slider']}>
      <div className={styles['left-overlay']} />
      <Slider {...settings} className={styles['collections-slick-slider']}>
        <ShortInfoCard
          name='Electronica Next Month'
          genre={MusicType.Electronic}
          link=''
          src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <ShortInfoCard
          name='Electronica Next Month'
          genre={MusicType.Electronic}
          link=''
          src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <ShortInfoCard
          name='Electronica Next Month'
          genre={MusicType.Electronic}
          link=''
          src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
        <ShortInfoCard
          name='Electronica Next Month'
          genre={MusicType.Electronic}
          link=''
          src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
      </Slider>
      <div className='right-overlay' />
    </section>
  )
}

export default Collections
