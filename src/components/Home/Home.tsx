import React from 'react';

import { DetailedCardComponent } from '../DetailedCardComponent/DetailedCardComponent';
import ShortInfoCard from '../ShortInfoCard/ShortInfoCard';

import { SettingsIcon } from '../icons/icons';
import { MusicType } from '../../enums';

import './home.scss';
const Home = () => {
  return (
    <section className="filters__block">
      <div className="container">
        <div className="title-block">
          <h2>For you</h2>
          <button className="settings-btn">
            <SettingsIcon />
          </button>
        </div>
        <DetailedCardComponent
          data="FRIDAY AUG 24, 9PM"
          name="Brightlight Music Festival"
          genre={MusicType.Psytrance}
          src="https://image.freepik.com/free-photo/people-concert-with-smoke-overlay-texture_53876-126856.jpg"
          price="150 - 230"
        />
        <ShortInfoCard
          name="Electronica Next Month"
          genre={MusicType.Electronic}
          link=""
          src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
    </section>
  );
};

export default Home;
