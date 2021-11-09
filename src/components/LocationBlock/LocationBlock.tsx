import React from 'react';
import ReactMapGL from 'react-map-gl';

// type LocationBlockType = {
//   latitude: number;
//   longitude: number;
//   zoom: number;
//   mapboxApiAccessToken: string;
// };

export default function LocationBlock() {
  // const [viewport, setViewport] = useState({
  const viewport = {
    latitude: 49.842957,
    longitude: 24.031111,
    zoom: 10,
    width: '100vw',
    height: '100vh',
  };
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={`pk.eyJ1IjoidGFyYXNraWlpbiIsImEiOiJja3Zyd2Y3ZGgxbnR4MndxaDdtMnd4czg2In0.6IZcJc33_zLJHZ3fwhKnFA`}
    ></ReactMapGL>
  );
}
