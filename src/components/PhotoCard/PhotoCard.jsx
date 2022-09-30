import React, { useState } from 'react';
import { createStyles, SimpleGrid, Card, Group, Image, Text, Container, AspectRatio, FileInput, Button, ActionIcon, Indicator } from '@mantine/core';
import { IconHeart } from '@tabler/icons';
// import { FileButton, Button, Group, Text } from '@mantine/core';
// import { Carousel } from '@mantine/carousel';
// import { IconStar } from '@tabler/icons';

import * as photosAPI from "../../utils/photosApi"


// -------------------------- FUNCTION -------------------------- //

export default function PhotoCard({ location, addPhoto, addRating, removeRating, loggedUser }) {
  const [selectedFile, setSelectedFile] = useState("");

  console.log(location.ratings)

  const ratingIndex = location.ratings.findIndex(
    (rating) => rating.username === loggedUser.username
  );

  const ratingColor = ratingIndex > -1 ? "red" : "grey";
  const ratingCount = location.ratings.length;
  const clickHandler =
    ratingIndex > -1
      ? () => removeRating(location.ratings[ratingIndex]._id) 
      : () => addRating(location._id); 


  function handleFileInput(e) {
    setSelectedFile(e)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', selectedFile)
    addPhoto(location._id, formData)

    console.log(formData, 'this is form data')
  }

  return (

    <Card key={location._id} p="md" radius="md">
      <AspectRatio ratio={1920 / 1080}>
      {/* <Image src={`${location?.photoUrl}`} wrapped ui={false} /> */}
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {location.name}
      </Text>
      <Group>
        <Indicator label={ratingCount}  inline size={15} >
        <ActionIcon>
            <IconHeart size={100} color={ratingColor} stroke={1.5} onClick={clickHandler} />
        </ActionIcon>
        </Indicator>
      </Group>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <FileInput
          placeholder="Choose File"
          className="form-control"
          name="playlist-cover"
          type="file"
          onChange={handleFileInput}
          label="Upload Photo"
          required
          withAsterisk
        />
        <Button type="submit">
          Submit
        </Button>
      </form>
      {/* <FileButton onChange={handleFileInput} accept="image/png,image/jpeg">
        <Button>Upload image</Button>
      </FileButton> */}
    </Card>
  )
}



// -------------------------- STYLING -------------------------- //
const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));