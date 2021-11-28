import React from 'react'
import ReactMapGL from 'react-map-gl'

const LocationBlock: React.FC = () => {
  const viewport = {
    latitude: 49.842957,
    longitude: 24.031111,
    zoom: 10,
    width: '100vw',
    height: '100vh',
  }
  return <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY} />
}

export default LocationBlock
