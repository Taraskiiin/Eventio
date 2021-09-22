import React from 'react'
import { SettingsIcon } from '../icons/icons'

const Home = () => {
  return (
    <section className="filters__block">
      <div className="container">
        <div className="title__block">
          <h2>For you</h2>
          <button className="settings">
            <SettingsIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
