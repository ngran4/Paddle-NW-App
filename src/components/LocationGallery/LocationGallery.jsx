import React from 'react';
import PhotoCard from "../PhotoCard/PhotoCard"

export default function LocationGallery({locations}){

  return(
    <PhotoCard locations={locations} />
  )
}