import React, { useState, useEffect } from "react";
import { createStyles, ActionIcon, Group } from '@mantine/core';
import { IconMap, IconLayoutList } from '@tabler/icons';

import PageHeader from "../../components/Header/Header";
import LocationGallery from "../../components/LocationGallery/LocationGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import * as photosAPI from "../../utils/photosApi";
import * as ratingsAPI from "../../utils/ratingsApi";

import Map from "../../components/Map/Map"


// -------------------------- FUNCTION -------------------------- //

export default function Home({ loggedUser, handleLogout }) {
  const [locations, setLocations] = useState([]);
  const [toggleMap, setToggleMap] = useState(false);
  const [toggleList, setToggleList] = useState(true);
  const [error, setError] = useState("");
  const { classes } = useStyles();


  const mapIconColor = "white";

  function handleToggleMap() {
    setToggleMap(!toggleMap)
    setToggleList(!toggleList)
  };

  function handleToggleList() {
    setToggleList(!toggleList)
    setToggleMap(!toggleMap)
  }

  async function addPhoto(locationId, photo) {
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
      <Group position="center" className={classes.toggle} spacing={2}>
        <ActionIcon>
          <IconMap size={100} color={mapIconColor} stroke={1.5} onClick={handleToggleMap} />
        </ActionIcon>
        <ActionIcon>
          <IconLayoutList size={100} color={mapIconColor} stroke={1.5} onClick={handleToggleList} />
        </ActionIcon>
      </Group>

      {toggleMap && (
        <Group position="center">
          <Map locations={locations} />
        </Group>
      )}
      {toggleList && (
        <Group position="center">
          <LocationGallery
            locations={locations}
            addPhoto={addPhoto}
            addRating={addRating}
            removeRating={removeRating}
            loggedUser={loggedUser}
          />
        </Group>
      )}

    </>
  )
}

// -------------------------- STYLING -------------------------- //

const useStyles = createStyles((theme, _params, getRef) => ({
  toggle: {
    marginTop: 15,
    marginRight: 10,
  },
}));
