import React from 'react';

import ShortInfoCard from '../ShotrInfoCard/ShortInfoCard';
import { SettingsIcon } from '../icons/icons';
import { MusicType } from '../../enums';

const Home = () => {
  return (
    <section className="filters__block">
      <div className="container">
        <div className="title__block">
          <h2>For you</h2>
          <button className="settings">
            <SettingsIcon />
          </button>
          <ShortInfoCard
            name="Electronica Next Month"
            genre={MusicType.Electronic}
            link=""
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
