import React from 'react';
import PhotoCard from "../PhotoCard/PhotoCard"
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';


// -------------------------- FUNCTION -------------------------- //

export default function LocationGallery({ locations, addPhoto, addRating, removeRating, loggedUser }) {

  // console.log(locations[0].name, 'locations in location gallery')
  // locations.forEach(n => console.log(n.name, 'name in gallery'))

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {locations.map((location) => {
          return(
            <PhotoCard location={location} key={location._id} addPhoto={addPhoto} addRating={addRating} removeRating={removeRating} loggedUser={loggedUser} />
          )
        })}
      </SimpleGrid>
    </Container>
  )
}




// -------------------------- STYLING -------------------------- //
