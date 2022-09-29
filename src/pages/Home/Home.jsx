import React, { useState, useEffect } from "react";
import { MantineProvider } from '@mantine/core';
import { Grid } from '@mantine/core';
import PageHeader from "../../components/Header/Header";
import AddPhoto from "../../components/AddPhoto/AddPhoto";
import LocationGallery from "../../components/LocationGallery/LocationGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

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
    <>
        <PageHeader />
        <Map locations={locations} />
        <LocationGallery locations={locations} />
    </>
  )
}