import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import mapboxgl from 'mapbox-gl';

import Map from "../../components/Map/Map"

export default function Home() {
  const [mapItems, setMapItems] = useState([]);



  // render map comp in home 
  return (
    // <h1>{mapItems[0].name}</h1>
    <>
      <Map />
    </>

  )
}

// it will be inside a useEffect
// inside of that useEffect, you’re going to loop over
// props that you sending to the map component, which have the lng and lat
// inside of the loop:
// const marker1 = new mapboxgl.Marker()
// .setLngLat([12.554729, 55.70651])
// .addTo(map);