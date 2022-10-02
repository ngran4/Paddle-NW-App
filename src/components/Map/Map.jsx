import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// import locationsArr from "../../../seeds"

mapboxgl.accessToken = 'pk.eyJ1IjoibmljZ3JhbnZpbGxlIiwiYSI6ImNsOGtvMWF3cjAwOG8zcHFqbHNncGJsaTEifQ.a3Eza0hWXvPF9UxW3lR3HA';

// -------------------------- FUNCTION -------------------------- //

export default function Map({ locations, handleToggleMap }) {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.67);
  const [lat, setLat] = useState(45.52);
  const [zoom, setZoom] = useState(7);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  })


  useEffect(() => {
    if (!map.current) return;
    if (!locations.length) return;

    locations.map((point) => {
      let marker = new mapboxgl.Marker()
        .setLngLat(point.location.coordinates)
        .addTo(map.current)
    });

  }, [locations.length])

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

