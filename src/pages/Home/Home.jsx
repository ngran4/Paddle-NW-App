import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import mapboxgl from 'mapbox-gl';

import Map from "../../components/Map/Map"

export default function Home() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {    
    async function getLocations() {
      try {
        const response = await fetch('/api/locations');
        const data = await response.json();
        
        console.log(data, 'this is data');
        setLocations([...data.data]);

      } catch (err) {
        console.log(err, 'error fetching from DB')
      }
    }
    getLocations();
  }, [])


  // render map comp in home 
  return (
    // <h1>{mapItems[0].name}</h1>
    <>
      <Map locations={locations} />
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