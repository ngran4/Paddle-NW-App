import React, { useState, useEffect } from "react";
// import { Grid } from '@mantine/core';
import PageHeader from "../../components/Header/Header";
import AddPhoto from "../../components/AddPhoto/AddPhoto";
import LocationGallery from "../../components/LocationGallery/LocationGallery";

// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import * as photosAPI from "../../utils/photosApi";

import Map from "../../components/Map/Map"

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [photo, setPhoto] = useState([]);

  async function addPhoto(locationId){
    try {
      const response = await photosAPI.create(locationId);
      console.log(response, 'res from add photo');
      getLocations();
    } catch (err) {
      console.log(err)
    }
  }
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

  useEffect(() => {    

    getLocations();
  }, [])


  // render map comp in home 
  return (
    <>
        <PageHeader />
        <Map locations={locations} />
        <AddPhoto />
        <LocationGallery locations={locations} addPhoto={addPhoto} />
    </>
  )
}