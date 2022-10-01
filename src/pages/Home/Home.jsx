import React, { useState, useEffect } from "react";
// import { Grid } from '@mantine/core';
import PageHeader from "../../components/Header/Header";
import AddPhoto from "../../components/AddPhoto/AddPhoto";
import LocationGallery from "../../components/LocationGallery/LocationGallery";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import * as photosAPI from "../../utils/photosApi";
import * as ratingsAPI from "../../utils/ratingsApi";

import Map from "../../components/Map/Map"

export default function Home({ loggedUser, handleLogout }) {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState("");

  async function addPhoto(locationId, photo){
    try {
      const response = await photosAPI.create(locationId, photo);
      console.log(response, 'res from add photo');
      getLocations();
    } catch (err) {
      console.log(err)
    }
  };

  async function addRating(locationId) {

    try {
      const response = await ratingsAPI.create(locationId);
      console.log(response, "from add rating");
      getLocations();
    } catch (err) {
      console.log(err, " err from server");
      setError("error adding rating");
    }
  };

  async function removeRating(ratingId) {
    try {
      const response = await ratingsAPI.removeRating(ratingId);
      console.log(response, " remove rating");
      getLocations();
    } catch (err) {
      console.log(err);
      setError("error removing rating");
    }
  };

  async function getLocations() {
    try {
      const response = await fetch('/api/locations');
      const data = await response.json();
      
      // console.log(data, 'this is data');
      setLocations([...data.data]);

    } catch (err) {
      console.log(err, 'error fetching from DB')
    }
  };

  useEffect(() => {    

    getLocations();
  }, []);


  // render map comp in home 

  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        <ErrorMessage error={error} />;
      </>
    );
  }
  return (
    <>
        <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        <Map locations={locations} />
        <LocationGallery locations={locations} addPhoto={addPhoto} addRating={addRating} removeRating={removeRating} loggedUser={loggedUser} />
    </>
  )
}