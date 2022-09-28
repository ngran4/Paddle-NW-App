import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// import locationsArr from "../../../seeds"

mapboxgl.accessToken = 'pk.eyJ1IjoibmljZ3JhbnZpbGxlIiwiYSI6ImNsOGtvMWF3cjAwOG8zcHFqbHNncGJsaTEifQ.a3Eza0hWXvPF9UxW3lR3HA';



export default function Map() {
  // const [locations, setLocations] = useState(locationsArr);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // const marker1 = new mapboxgl.Marker()
    // .setLngLat([12.554729, 55.70651])
    // .addTo(map);

  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}


// it will be inside a useEffect
// inside of that useEffect, you’re going to loop over
// props that you sending to the map component, which have the lng and lat
// inside of the loop:
